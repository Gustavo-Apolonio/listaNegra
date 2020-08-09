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
                Models.TbListaNegra ln = lnCnv.ToTableConversor(req);
                ln = bsns.Salvar(ln);
                Models.Response.ListaNegraResponse resp = lnCnv.ToResponseConversor(ln);
                return resp;
            }
            catch(System.Exception e)
            {
                return BadRequest(
                    new Models.Response.ErrorResponse(e.Message, 404)
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
                List<Models.Response.ListaNegraResponse> resp = lns.Select(x => lnCnv.ToResponseConversor(x)).ToList();
                return resp;
            }
            catch(System.Exception e)
            {
                return BadRequest(
                    new Models.Response.ErrorResponse(e.Message, 500)
                );
            }
        }
    }
}