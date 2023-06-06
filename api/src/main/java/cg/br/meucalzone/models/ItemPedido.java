package cg.br.meucalzone.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;


@Entity
@Table(name = "itens_pedidos")
public class ItemPedido {

    @Id
    @ManyToOne
    @JoinColumn(name = "idPedido", nullable = false)
    private Pedido pedido;
    @Id
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
}
