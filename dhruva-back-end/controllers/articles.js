const router = require("express").Router();
const NewInfo = require("../models/newinfo");
const tech = require("../models/tech");

router.get("/", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/App");
      // res.render('Header',{message:'we work'})
    })
  
    router.get("/home", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/home");
      // res.render('Header',{message:'we work'})
    })

    router.get("/NewInfo", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/NewInfo");
      // res.render('Header',{message:'we work'})
    })

    router.get("/tech", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/tech");
      // res.render('Header',{message:'we work'})
    })

    router.get("/login", (req, res) => {
      // console.log("neuro", newinfo);
      res.render("website/login");
      // res.render('Header',{message:'we work'})
    })

// router.get("/", (req, res) => {
//   dress
//     .find()
//     .then((Dresses) => {
//       // console.log(Dresses)
//       res.render("dresses/index", { Dresses });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render("error404");
//     });
//   // res.send("API is working properly")
// });

// router.get("/tech", (req, res) => {
//   tech
//     .find({})
//     .then((tech) => {
//       console.log("neuro");
//       res.render("tech", { tech });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render("error404");
//     });
// });

// router.post('/', (req, res) => {
//   db.Place.create(req.body)
//   .then(() => {
//       res.redirect('/places2')
//   })
//   .catch(err => {
//     console.log('err', err)
//       res.render('error404')
//   })
// })

router.get("/login", (req, res) => {
  res.render("login");
});

// router.get('/:id', (req, res) => {
//   db.Place.findById(req.params.id)
//   .populate('comments')
//   .then(place => {
//       console.log(place.comments)
//       res.render('places2/show', { place })
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// router.put('/:id', (req, res) => {
//   db.Place.findByIdAndUpdate(req.params.id, req.body)
//   .then(() => {
//       res.redirect(`/places2/${req.params.id}`)
//   })
//   .catch(err => {
//       console.log('err', err)
//       res.render('error404')
//   })
// })

// router.delete('/places2/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id, 1)
//     res.redirect('/places')
//   }
// })

// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places2/edit', { place: places[id] })
//   }
// })

// router.post('/:id/rant', (req, res) => {
//   res.send('GET /places/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })

// router.post('/:id/comment', (req, res) => {
//   console.log(req.body)
//   db.Place.findById(req.params.id)
//   .then(place => {
//       db.Comment.create(req.body)
//       .then(comment => {
//           place.comments.push(comment.id)
//           place.save()
//           .then(() => {
//               res.redirect(`/places2/${req.params.id}`)
//           })
//       })
//       .catch(err => {
//           res.render('error404')
//       })
//   })
//   .catch(err => {
//       res.render('error404')
//   })
// })

module.exports = router;
