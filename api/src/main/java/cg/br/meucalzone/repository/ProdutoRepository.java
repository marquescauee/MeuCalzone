package cg.br.meucalzone.repository;

import cg.br.meucalzone.models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}
