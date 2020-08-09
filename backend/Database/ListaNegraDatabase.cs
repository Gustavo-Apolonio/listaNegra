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
    }
}