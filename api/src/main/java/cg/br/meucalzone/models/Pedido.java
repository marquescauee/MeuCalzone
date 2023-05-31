package cg.br.meucalzone.models;

import jakarta.persistence.*;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Entity
@Table(name = "pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idPedido;

    @NotEmpty
    private double valorTotal;

    @NotEmpty
    private String formaEntrega;

    @ManyToOne
    @JoinColumn(name = "idPessoa", nullable = false)
    private Pessoa pessoa;

    @OneToMany(mappedBy = "pedido")
    private List<ItemPedido> itensPedido;

    public void addItemPedido(ItemPedido ip) {
        this.itensPedido.add(ip);
    }

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

    public int getId_pedido() {
        return idPedido;
    }

    public void setId_pedido(int id_pedido) {
        this.idPedido = id_pedido;
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
