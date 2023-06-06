package cg.br.meucalzone.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

@Entity
@Table(name = "produtos")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProduto;

    @NotBlank
    private String descricao;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "idTipoProduto")
    private TipoProduto tipo;

    @NotNull
    private int qtd;

    public Produto() {}

    public Produto(String descricao, TipoProduto tipo, int qtd) {
        this.descricao = descricao;
        this.tipo = tipo;
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

    public TipoProduto getTipo() {
        return tipo;
    }

    public void setTipo(TipoProduto tipo) {
        this.tipo = tipo;
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
                ", tipo=" + tipo +
                ", qtd=" + qtd +
                '}';
    }
}
