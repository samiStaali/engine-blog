﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BlogEngine.Models;

namespace BlogEngine.Controllers
{
    public class PublicationController : ApiController
    {
        private ModelBD db = new ModelBD();

        // GET: api/Publication
        public IQueryable<Publication> GetPublications()
        {
            return db.Publications;
        }

        // GET: api/Publication/5
        [ResponseType(typeof(Publication))]
        public IHttpActionResult GetPublication(long id)
        {
            Publication publication = db.Publications.Find(id);
            if (publication == null)
            {
                return NotFound();
            }

            return Ok(publication);
        }

        // PUT: api/Publication/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPublication(long id, Publication publication)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != publication.PublicationID)
            {
                return BadRequest();
            }

            db.Entry(publication).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PublicationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Publication
        [ResponseType(typeof(Publication))]
        public IHttpActionResult PostPublication(Publication publication)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Publications.Add(publication);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = publication.PublicationID }, publication);
        }

        // DELETE: api/Publication/5
        [ResponseType(typeof(Publication))]
        public IHttpActionResult DeletePublication(long id)
        {
            Publication publication = db.Publications.Find(id);
            if (publication == null)
            {
                return NotFound();
            }

            db.Publications.Remove(publication);
            db.SaveChanges();

            return Ok(publication);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PublicationExists(long id)
        {
            return db.Publications.Count(e => e.PublicationID == id) > 0;
        }
    }
}