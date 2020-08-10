using System;
using System.Collections.Generic;
using System.Linq;

namespace backend.Business
{
    public class ListaNegraBusiness
    {

        Database.ListaNegraDatabase db = new Database.ListaNegraDatabase();

        public Models.TbListaNegra Salvar(Models.TbListaNegra req)
        {
            if(req.NmPessoa == string.Empty)
                throw new Exception("Nome não pode estar vazio!");
            if(req.DsMotivo == string.Empty)
                throw new Exception("Motivo não pode estar vazio!");
            if(req.DsLocal == string.Empty)
                throw new Exception("Local não pode estar vazio!");
            if(req.DtInclusao > DateTime.Now)
                throw new Exception("Data não pode ser futura!");
            
            return db.Salvar(req);
        }

        public List<Models.TbListaNegra> Consultar()
        {
            return db.Consultar();
        }

        public Models.TbListaNegra Alterar(Models.TbListaNegra atual, Models.TbListaNegra novo)
        {
            if(novo.NmPessoa == string.Empty)
                throw new Exception("Nome não pode estar vazio!");
            if(novo.DsMotivo == string.Empty)
                throw new Exception("Motivo não pode estar vazio!");
            if(novo.DsLocal == string.Empty)
                throw new Exception("Local não pode estar vazio!");
            if(novo.DtInclusao > DateTime.Now)
                throw new Exception("Data não pode ser futura!");

            return db.Alterar(atual, novo);
        }

        public Models.TbListaNegra ConsultarPorId(int id)
        {
            if(id <= 0)
                throw new Exception("ID inválido");
                
            return db.ConsultarPorId(id);
        }

        public Models.TbListaNegra Deletar(Models.TbListaNegra ln)
        {
            return db.Deletar(ln);
        }
    }
}