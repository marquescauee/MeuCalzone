package cg.br.meucalzone.models;

import jakarta.persistence.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "produtos")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idProduto;

    @NotEmpty
    private String descricao;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "idTipoProduto")
    private TipoProduto idTipo;

    @OneToMany(mappedBy = "produto")
    private List<ItemPedido> itensPedido;

    @NotEmpty
    private int qtd;

    public Produto() {}

    public List<ItemPedido> getItensPedido() {
        return itensPedido;
    }

    public void addItemPedido(ItemPedido ip) {
        this.itensPedido.add(ip);
    }

    public Produto(int idProduto, String descricao, TipoProduto idTipo, int qtd) {
        this.idProduto = idProduto;
        this.descricao = descricao;
        this.idTipo = idTipo;
        this.qtd = qtd;
    }

    public int getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(int idProduto) {
        this.idProduto = idProduto;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public TipoProduto getIdTipo() {
        return idTipo;
    }

    public void setIdTipo(TipoProduto idTipo) {
        this.idTipo = idTipo;
    }

    public int getQtd() {
        return qtd;
    }

    public void setQtd(int qtd) {
        this.qtd = qtd;
    }

    @Override
    public String toString() {
        return "Produto{" +
                "idProduto=" + idProduto +
                ", descricao='" + descricao + '\'' +
                ", idTipo=" + idTipo +
                ", qtd=" + qtd +
                '}';
    }
}
