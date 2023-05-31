package cg.br.meucalzone.models;

import jakarta.persistence.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pessoas")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idPessoa;
    @NotEmpty
    private String nome;

    @Pattern(regexp="[\\d]{11}")
    @NotEmpty
    private String cpf;

    @NotEmpty
    private String email;

    @NotEmpty
    private String endereco;

    @OneToMany(mappedBy = "pessoa")
    private List<Pedido> pedidos;

    public void addPedido(Pedido pedido) {
        this.pedidos.add(pedido);
    }

    public Pessoa() {}

    public Pessoa(String nome, String cpf, String email, String endereco) {
        this.pedidos = new ArrayList<>();
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.endereco = endereco;
    }

    public void setId(int id) {
        this.idPessoa = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public int getId() {
        return idPessoa;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEmail() {
        return email;
    }

    public String getEndereco() {
        return endereco;
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "id=" + idPessoa +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", email='" + email + '\'' +
                ", endereco='" + endereco + '\'' +
                '}';
    }
}
