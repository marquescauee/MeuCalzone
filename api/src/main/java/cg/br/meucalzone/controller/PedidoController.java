package cg.br.meucalzone.controller;

import cg.br.meucalzone.dto.PedidoDTO;
import cg.br.meucalzone.models.ItemPedido;
import cg.br.meucalzone.models.Pedido;
import cg.br.meucalzone.models.Pessoa;
import cg.br.meucalzone.models.Produto;
import cg.br.meucalzone.repository.ItemPedidoRepository;
import cg.br.meucalzone.repository.PedidoRepository;
import cg.br.meucalzone.repository.PessoaRepository;
import cg.br.meucalzone.repository.ProdutoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {
    private ProdutoRepository produtoRepository;
    private PedidoRepository pedidoRepository;
    private ItemPedidoRepository itemPedidoRepository;

    private PessoaRepository pessoaRepository;

    public PedidoController(ProdutoRepository produtoRepository, PedidoRepository pedidoRepository, ItemPedidoRepository itemPedidoRepository, PessoaRepository pessoaRepository) {
        this.produtoRepository = produtoRepository;
        this.pedidoRepository = pedidoRepository;
        this.itemPedidoRepository = itemPedidoRepository;
        this.pessoaRepository = pessoaRepository;
    }
    @PostMapping
    public ResponseEntity<String> salvarPedido(@RequestBody PedidoDTO itens) {
        double preco = 0;
        Pedido pedido = new Pedido();
        Pessoa pessoa = pessoaRepository.findById(itens.getIdPessoa()).get();

        pedido.setPessoa(pessoa);
        pedido.setFormaEntrega(itens.getEntrega());
        pedidoRepository.save(pedido);

        ItemPedido ip;
        List<ItemPedido> itensParaSalvar = new ArrayList<>();

        for(Map<String, String> calzone : itens.getCalzones()) {
            preco += tabelaPrecos(calzone.get("descricao")) * (Integer.parseInt(calzone.get("quantidade")));
            ip = new ItemPedido();
            ip.setPedido(pedido);

            Optional<Produto> p = produtoRepository.findById(Integer.parseInt(calzone.get("idProduto")));
            Produto prod = p.get();

            int qtdPedido = Integer.parseInt(calzone.get(("quantidade")));
            ip.setProduto(prod);
            ip.setQtdProduto(qtdPedido);

            prod.setQtd(prod.getQtd() - qtdPedido);
            produtoRepository.save(prod);
            itemPedidoRepository.save(ip);
        }

        for(Map<String, String> batata : itens.getBatatas()) {
            preco += tabelaPrecos(batata.get("descricao")) * (Integer.parseInt(batata.get("quantidade")));
            ip = new ItemPedido();
            ip.setPedido(pedido);

            Optional<Produto> p = produtoRepository.findById(Integer.parseInt(batata.get("idProduto")));
            Produto prod = p.get();

            int qtdPedido = Integer.parseInt(batata.get(("quantidade")));
            ip.setProduto(prod);
            ip.setQtdProduto(qtdPedido);

            prod.setQtd(prod.getQtd() - qtdPedido);
            produtoRepository.save(prod);
            itemPedidoRepository.save(ip);
        }

        for(Map<String, String> bebida : itens.getBebidas()) {
            preco += tabelaPrecos(bebida.get("descricao")) * (Integer.parseInt(bebida.get("quantidade")));
            ip = new ItemPedido();
            ip.setPedido(pedido);

            Optional<Produto> p = produtoRepository.findById(Integer.parseInt(bebida.get("idProduto")));
            Produto prod = p.get();
            int qtdPedido = Integer.parseInt(bebida.get(("quantidade")));
            ip.setProduto(prod);
            ip.setQtdProduto(qtdPedido);
            prod.setQtd(prod.getQtd() - qtdPedido);
            produtoRepository.save(prod);
            itemPedidoRepository.save(ip);
        }

        pedido.setValorTotal(preco);
        pedidoRepository.save(pedido);

        for(ItemPedido i : itensParaSalvar)
            System.out.println(i.getIdItemPedido());

        return ResponseEntity.status(HttpStatus.CREATED).body("\"Pedido cadastrado com sucesso\"");
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Object>> recuperarPedidosUsuario(@PathVariable(value = "id") int id) {
        List<Object> pedidos = pedidoRepository.findAllByidPessoa(id);

        return ResponseEntity.status(HttpStatus.OK).body(pedidos);
    }

    public double tabelaPrecos(String descricaoProduto) {
        switch(descricaoProduto) {
            case "Calabresa":
            case "Carne":
            case "Frango":
                return 20;
            case "Batata Pequena":
                return 5;
            case "Batata Média":
                return 8;
            case "Batata Grande":
                return 10;
            case "Sprite":
                return 8;
            case "Água com gás":
                return 6;
            case "Suco de laranja":
                return 12;
            default:
                return 50;
        }
    }
}
