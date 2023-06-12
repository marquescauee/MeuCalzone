package cg.br.meucalzone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cg.br.meucalzone.models.Pessoa;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {
    Optional<Pessoa> findByEmail(String email);
}
