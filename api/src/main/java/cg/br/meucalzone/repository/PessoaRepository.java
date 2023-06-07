package cg.br.meucalzone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cg.br.meucalzone.models.Pessoa;

import java.util.Optional;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {
    Optional<Pessoa> findByEmail(String email);
}
