package cg.br.meucalzone.models;

import jakarta.persistence.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "bebidas")
public class Bebida {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Size(max = 1)
    private String tamanho;

    @NotEmpty
    private Double preco;

    public Bebida() {}

    public Bebida(String tamanho, Double preco) {
        this.tamanho = tamanho;
        this.preco = preco;
    }

    public int getId() {
        return id;
    }

    public String getTamanho() {
        return tamanho;
    }

    public Double getPreco() {
        return preco;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    @Override
    public String toString() {
        return "Bebida{" +
                "id=" + id +
                ", tamanho='" + tamanho + '\'' +
                ", preco=" + preco +
                '}';
    }
}
