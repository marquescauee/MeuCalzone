package cg.br.meucalzone.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "pessoas")
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPessoa;

    @NotBlank
    private String nome;

    @Pattern(regexp="[\\d]{11}")
    @NotBlank
    private String cpf;

    @NotBlank
    private String email;

    @NotBlank
    @Size(max = 1)
    private String tipo;

    @NotBlank
    private String senha;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idEndereco", nullable = false)
    private Endereco endereco;

    public Pessoa() {}

    public Pessoa(String nome, String cpf, String email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
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

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getSenha() {
        return senha;
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

    public Endereco getEndereco() {
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
