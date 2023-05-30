package cg.br.meucalzone.models;

import jakarta.persistence.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotEmpty
    private double valorTotal;

    @NotEmpty
    private String formaEntrega;

    public Pedido() {}

    public Pedido(double valorTotal, String formaEntrega) {
        this.valorTotal = valorTotal;
        this.formaEntrega = formaEntrega;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public void setFormaEntrega(String formaEntrega) {
        this.formaEntrega = formaEntrega;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public String getFormaEntrega() {
        return formaEntrega;
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "valorTotal=" + valorTotal +
                ", formaEntrega='" + formaEntrega + '\'' +
                '}';
    }
}
