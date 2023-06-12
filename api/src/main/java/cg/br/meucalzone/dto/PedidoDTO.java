package cg.br.meucalzone.dto;

import java.util.List;
import java.util.Map;

public class PedidoDTO {

    private List<Map<String, String>> calzones;

    private List<Map<String, String>> bebidas;

    private List<Map<String, String>> batatas;

    private String entrega;

    private int idPessoa;

    public PedidoDTO() {}

    public List<Map<String, String>> getCalzones() {
        return calzones;
    }

    public List<Map<String, String>> getBebidas() {
        return bebidas;
    }

    public List<Map<String, String>> getBatatas() {
        return batatas;
    }

    public String getEntrega() {
        return entrega;
    }

    public int getIdPessoa() {
        return idPessoa;
    }
}
