using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class ListaNegraDatabase
    {
        Models.lndbContext ctx = new Models.lndbContext();

        public Models.TbListaNegra Salvar(Models.TbListaNegra req)
        {
            ctx.Add(req);
            ctx.SaveChanges();
            return req;
        }

        public List<Models.TbListaNegra> Consultar()
        {
            return ctx.TbListaNegra.ToList();
        }

        public Models.TbListaNegra ConsultarPorId(int id)
        {
            return ctx.TbListaNegra.First(x => x.IdListaNegra == id);
        }

        public Models.TbListaNegra Alterar(Models.TbListaNegra atual, Models.TbListaNegra novo)
        {
            atual.NmPessoa = novo.NmPessoa;
            atual.DsMotivo = novo.DsMotivo;
            atual.DsLocal = novo.DsLocal;
            
            ctx.SaveChanges();

            return atual;
        }

        public Models.TbListaNegra Deletar(Models.TbListaNegra ln)
        {
            ctx.Remove(ln);
            ctx.SaveChanges();

            return ln;
        }
    }
}