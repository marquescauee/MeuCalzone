package cg.br.meucalzone.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tipo_produto")
public class TipoProduto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTipoProduto;

    @Size(max = 1)
    private String tipo;

    @NotBlank
    private String descricao;

    public TipoProduto() {}

    public TipoProduto(String tipo, String descricao) {
        this.tipo = tipo;
        this.descricao = descricao;
    }

    public int getIdTipoProduto() {
        return idTipoProduto;
    }

    public void setIdTipoProduto(int idTipoProduto) {
        this.idTipoProduto = idTipoProduto;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public String toString() {
        return "TipoProduto{" +
                "idTipoProduto=" + idTipoProduto +
                ", tipo='" + tipo + '\'' +
                '}';
    }
}
