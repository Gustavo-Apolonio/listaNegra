using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListaNegraController : ControllerBase
    {

        Business.ListaNegraBusiness bsns = new Business.ListaNegraBusiness();
        Utils.ListaNegraConversor lnCnv = new Utils.ListaNegraConversor();

        [HttpPost]
        public ActionResult<Models.Response.ListaNegraResponse> Inserir(Models.Request.ListaNegraRequest req)
        {
            try
            {
                Models.TbListaNegra ln = lnCnv.ToTable(req);
                ln = bsns.Salvar(ln);
                Models.Response.ListaNegraResponse resp = lnCnv.ToResponse(ln);
                return resp;
            }
            catch(System.Exception e)
            {
                return BadRequest(
                    new Models.Response.ErrorResponse(e.Message, 400)
                );
            }
        }

        [HttpGet]
        public ActionResult<List<Models.Response.ListaNegraResponse>> Listar()
        {
            try
            {
                List<Models.TbListaNegra> lns = bsns.Consultar();
                if(lns.Count == 0)
                    return NotFound();
                List<Models.Response.ListaNegraResponse> resp = lns.Select(x => lnCnv.ToResponse(x)).ToList();
                return resp;
            }
            catch(System.Exception e)
            {
                return BadRequest(
                    new Models.Response.ErrorResponse(e.Message, 500)
                );
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Models.Response.ListaNegraResponse> Alterar(int id, Models.Request.ListaNegraRequest req)
        {
            try
            {
                Models.TbListaNegra atual = bsns.ConsultarPorId(id);
                if(atual == null)
                    return NotFound();
                Models.TbListaNegra novo = lnCnv.ToTable(req);
                atual = bsns.Alterar(atual, novo);
                Models.Response.ListaNegraResponse resp = lnCnv.ToResponse(atual);
                return resp;
            }
            catch (System.Exception e)
            {
                return BadRequest(
                    new Models.Response.ErrorResponse(e.Message, 400)
                );
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Models.Response.ListaNegraResponse> Deletar(int id)
        {
            try
            {
                Models.TbListaNegra ln = bsns.ConsultarPorId(id);
                if(ln == null)
                    return NotFound();
                ln = bsns.Deletar(ln);
                Models.Response.ListaNegraResponse resp = lnCnv.ToResponse(ln);
                return resp;
            }
            catch (System.Exception e)
            {
                return BadRequest(
                    new Models.Response.ErrorResponse(e.Message, 400)
                );
            }
        }

    }
}