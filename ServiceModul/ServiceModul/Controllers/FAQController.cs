using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceModul.Model;

namespace ServiceModul.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FAQController : ControllerBase
    {
        private readonly DBContext _context;

        public FAQController(DBContext context)
        {
            _context = context;
        }

        // GET: api/FAQ
        [HttpGet]
        public IEnumerable<FAQ> GetFaq()
        {
            return _context.Faq;
        }

        // GET: api/FAQ/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFAQ([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fAQ = await _context.Faq.FindAsync(id);

            if (fAQ == null)
            {
                return NotFound();
            }

            return Ok(fAQ);
        }

        // PUT: api/FAQ/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFAQ([FromRoute] int id, [FromBody] FAQ fAQ)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fAQ.ID)
            {
                return BadRequest();
            }

            _context.Entry(fAQ).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FAQExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FAQ
        [HttpPost]
        public async Task<IActionResult> PostFAQ([FromBody] FAQ fAQ)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Faq.Add(fAQ);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFAQ", new { id = fAQ.ID }, fAQ);
        }

        // DELETE: api/FAQ/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFAQ([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var fAQ = await _context.Faq.FindAsync(id);
            if (fAQ == null)
            {
                return NotFound();
            }

            _context.Faq.Remove(fAQ);
            await _context.SaveChangesAsync();

            return Ok(fAQ);
        }

        private bool FAQExists(int id)
        {
            return _context.Faq.Any(e => e.ID == id);
        }
    }
}