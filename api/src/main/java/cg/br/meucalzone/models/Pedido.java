package cg.br.meucalzone.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPedido;

    @NotNull
    private double valorTotal;

    @NotBlank
    private String formaEntrega;

    @ManyToOne
    @JoinColumn(name = "idPessoa", nullable = false)
    private Pessoa pessoa;

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

    public int getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(int idPedido) {
        this.idPedido = idPedido;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "valorTotal=" + valorTotal +
                ", formaEntrega='" + formaEntrega + '\'' +
                '}';
    }
}
