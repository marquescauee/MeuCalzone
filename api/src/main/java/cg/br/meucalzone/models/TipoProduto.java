package cg.br.meucalzone.models;

import jakarta.persistence.*;

import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "tipo_produto")
public class TipoProduto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idTipoProduto;

    @Size(max = 1)
    private String tipo;

    @OneToMany(mappedBy = "idTipo")
    private List<Produto> produtos;

    public TipoProduto() {}

    public TipoProduto(String tipo) {
        this.tipo = tipo;
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

    @Override
    public String toString() {
        return "TipoProduto{" +
                "idTipoProduto=" + idTipoProduto +
                ", tipo='" + tipo + '\'' +
                '}';
    }
}
