package cg.br.meucalzone.repository;

import cg.br.meucalzone.models.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Integer> {

    @Query(value = "SELECT p.id_pedido as id_pedido, p.forma_entrega as forma_entrega, p.valor_total as valor_total, p.id_pessoa as id_pessoa, prod.descricao as produto_descricao, ip.qtd_itens_pedido as unidades, ip.id_item_pedido as id_item_pedido\n" +
            "\tFROM pedidos p \n" +
            "\tINNER JOIN itens_pedidos ip ON p.id_pedido = ip.id_pedido \n" +
            "\tINNER JOIN produtos prod on prod.id_produto = ip.id_produto\n" +
            "\tWHERE id_pessoa = ?", nativeQuery = true)
    List<Object> findAllByidPessoa(int id);
}
