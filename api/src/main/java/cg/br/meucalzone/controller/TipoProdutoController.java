package cg.br.meucalzone.controller;

import cg.br.meucalzone.models.Produto;
import cg.br.meucalzone.models.TipoProduto;
import cg.br.meucalzone.repository.ProdutoRepository;
import cg.br.meucalzone.repository.TipoProdutoRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tiposProdutos")
public class TipoProdutoController {

    private TipoProdutoRepository tipoProdutoRepository;

    public TipoProdutoController(TipoProdutoRepository tipoProdutoRepository) {
        this.tipoProdutoRepository = tipoProdutoRepository;
    }

    @GetMapping
    public ResponseEntity<List<TipoProduto>> getTiposProduto() {
        List<TipoProduto> tipos = tipoProdutoRepository.findAll();

        return ResponseEntity.status(HttpStatus.OK).body(tipos);
    }


    @PostMapping
    public ResponseEntity<Object> saveTipoProduto(@RequestBody @Valid TipoProduto tipoProduto) {
        try {
            tipoProdutoRepository.save(tipoProduto);
            return ResponseEntity.status(HttpStatus.CREATED).body(tipoProduto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Corpo da requisição inválido");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getTipoProduto(@PathVariable(value = "id") int id) {
        Optional<TipoProduto> tipoProduto = tipoProdutoRepository.findById(id);

        if(tipoProduto.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(tipoProduto);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tipo não encontrado");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateTipoProduto(@PathVariable(value = "id") int id, @RequestBody @Valid TipoProduto tipoProdutoRequest) {
        Optional<TipoProduto> tipoProdutoBanco = tipoProdutoRepository.findById(id);

        if(!tipoProdutoBanco.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tipo não encontrado");

        TipoProduto tipoProduto = tipoProdutoBanco.get();

        tipoProduto.setDescricao(tipoProdutoRequest.getDescricao());
        tipoProduto.setTipo(tipoProdutoRequest.getTipo());

        return ResponseEntity.status(HttpStatus.OK).body(tipoProdutoRepository.save(tipoProduto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteTipoProduto (@PathVariable(value = "id") int id) {
        Optional<TipoProduto> tipoProdutoOptional = tipoProdutoRepository.findById(id);

        if(!tipoProdutoOptional.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tipo não encontrado");

        tipoProdutoRepository.delete(tipoProdutoOptional.get());

        return ResponseEntity.status(HttpStatus.OK).body("Tipo removido com sucesso");
    }

}
