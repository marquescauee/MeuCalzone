package cg.br.meucalzone.controller;

import cg.br.meucalzone.models.Produto;
import cg.br.meucalzone.models.TipoProduto;
import cg.br.meucalzone.repository.ProdutoRepository;
import cg.br.meucalzone.repository.TipoProdutoRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    private ProdutoRepository produtoRepository;
    private TipoProdutoRepository tipoProdutoRepository;

    public ProdutoController(ProdutoRepository produtoRepository, TipoProdutoRepository tipoProdutoRepository) {
        this.produtoRepository = produtoRepository;
        this.tipoProdutoRepository = tipoProdutoRepository;
    }

    @GetMapping
    public ResponseEntity<List<Produto>> getProdutos() {
        List<Produto> produtos = produtoRepository.findAll();

        return ResponseEntity.status(HttpStatus.OK).body(produtos);
    }

    @PostMapping
    public ResponseEntity<Object> saveProduto(@RequestBody @Valid Produto produto) {
        try {
            produtoRepository.save(produto);
            return ResponseEntity.status(HttpStatus.CREATED).body(produto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("\"Corpo da requisição inválido\"");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getProduto(@PathVariable(value = "id") int id) {
        Optional<Produto> produto = produtoRepository.findById(id);

        if(produto.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(produto);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("\"Produto não encontrado\"");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProduto(@PathVariable(value = "id") int id, @RequestBody @Valid Produto produtoRequest) {
        Optional<Produto> produtoBanco = produtoRepository.findById(id);

        if(!produtoBanco.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("\"Produto não encontrado\"");

        Produto produto = produtoBanco.get();

        Optional<TipoProduto> tipoProdutoBanco = tipoProdutoRepository.findById(produto.getTipo().getIdTipoProduto());

        produto.setDescricao(produtoRequest.getDescricao());
        produto.setQtd(produtoRequest.getQtd());
        produto.setTipo(produtoRequest.getTipo());

        if(tipoProdutoBanco.isPresent()) {
            TipoProduto tipoProduto = tipoProdutoBanco.get();
            tipoProduto.setDescricao(produtoRequest.getTipo().getDescricao());
            tipoProduto.setTipo(produtoRequest.getTipo().getTipo());
            produto.setTipo(tipoProduto);
        }

        return ResponseEntity.status(HttpStatus.OK).body(produtoRepository.save(produto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProduto(@PathVariable(value = "id") int id) {
        Optional<Produto> produtoOptional = produtoRepository.findById(id);

        if(!produtoOptional.isPresent())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("\"Produto não encontrado\"");

        produtoRepository.delete(produtoOptional.get());

        return ResponseEntity.status(HttpStatus.OK).body("\"Produto removido com sucesso\"");
    }

    @GetMapping("/calzones")
    public ResponseEntity<List<Produto>> recuperarCalzones() {
        List<Produto> produtos = produtoRepository.findAll();

        List<Produto> result = new ArrayList<>();

        for(Produto p : produtos) {
            if(p.getTipo().getTipo().equals("cal")) {
                result.add(p);
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/bebidas")
    public ResponseEntity<List<Produto>> recuperarBebidas() {
        List<Produto> produtos = produtoRepository.findAll();

        List<Produto> result = new ArrayList<>();

        for(Produto p : produtos) {
            if(p.getTipo().getTipo().equals("beb")) {
                result.add(p);
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @GetMapping("/batatas")
    public ResponseEntity<List<Produto>> recuperarBatatas() {
        List<Produto> produtos = produtoRepository.findAll();

        List<Produto> result = new ArrayList<>();

        for(Produto p : produtos) {
            if(p.getTipo().getTipo().equals("bat")) {
                result.add(p);
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
