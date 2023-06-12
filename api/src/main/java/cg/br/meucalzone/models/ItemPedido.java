package cg.br.meucalzone.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;


@Entity
@Table(name = "itens_pedidos")
public class ItemPedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idItemPedido;

    @ManyToOne
    @JoinColumn(name = "idPedido", nullable = false)
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "idProduto", nullable = false)
    private Produto produto;

    @NotNull
    private int qtdItensPedido;

    public ItemPedido() {}

    public ItemPedido(int qtdProduto) {
        this.qtdItensPedido = qtdProduto;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public int getQtdProduto() {
        return qtdItensPedido;
    }

    public void setQtdProduto(int qtdProduto) {
        this.qtdItensPedido = qtdProduto;
    }

    public int getIdItemPedido() {
        return idItemPedido;
    }

    public void setIdItemPedido(int idItemPedido) {
        this.idItemPedido = idItemPedido;
    }

    public int getQtdItensPedido() {
        return qtdItensPedido;
    }

    public void setQtdItensPedido(int qtdItensPedido) {
        this.qtdItensPedido = qtdItensPedido;
    }
}
