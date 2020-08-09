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
            
            return db.Salvar(req);
        }

        public List<Models.TbListaNegra> Consultar()
        {
            return db.Consultar();
        }
    }
}