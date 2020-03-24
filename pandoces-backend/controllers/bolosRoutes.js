module.exports = app => {
    const {Bolos} = require('../app/models');

      app.on('error', (error) =>{
        console.log(error)
    })    

    app.get("/bolos",(req, res)=> {
        res.json('Get dos bolos');
        console.log('oi');
    })

    app.post("/bolos", (req,res) => {

        storageRef.putString(req.body.base64, 'base64').then(function(snapshot) {
            console.log(req.body.base64);
        });

        // Bolos.create(req.body).then(function(bolos){
        //     if(bolos){
        //       res.send(bolos)
        //     }else{
        //       res.status(400).send('Error in insert new record');
        //     }
        //   })
    })
}

// iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKXSURBVEiJtVRfSFNhFP+d7+46N02XpNU02kCC/vhQhrYWmnuL8CEIUggyAt8q6DWQq9RbvfUkSfVSBkIPUW8502wo1YuGGMJUcpp/2pZuy93d7+tBlHm33TtMz9v5feec3++c7/sOsMdG+QQt+hruA9RCJJ4AAATdFhCvKvoHH+4KwZKvMQqgRAdHy/s/OsxyWT4EROIOAC0N0ojE3bxy8wkCgCVfYzOAXgCSILpe8WGgb9cI1jo7Wvlq7BKPhCsAgDn2L5K96N2+rq7X/02w1tnRmhgcegnBdZmEQm9DixmJxVSBxj3WmhoUHD+BRGAYAGDzeJGcmAAD9wIwJDDtQIyOtkGIZ9mz6SbV1T3fMUGss+NyamXlMRErzUoueNRSVn6vSFHe56phOKL1yclebWGh2CDkkHbY2YvMP5IfAdSUVXa5YT1Ti+T4GNSZaQCAfNSFglM1WP/2FXx1tdCohOGIxMhIEIDLUAQwTfX17lyHWTsQfsWSGMbZ1NJilIjmDUUIEY0/UM7ZvPhCTUpKf57RgfArlkjPj+VUaC7rxeZU6qyMOqqPlZGibPswGbsoPsRObxYnmx2QpNxVJWkjBkAqNFcaZ6w2g1gPEGOSpeoIZLcbtoaL4H+i+Pt5GOrcTyCpbgQVyJArq1B43gtWUorE4ADUYBDEWIaazBEFAi4wFswt28A4d5PHM50OGa7ryPgYkuHwlh+bnUFsdmbLT4Z/IzI+Zsi5rYN2f+iAzxapbqK46ZbMZn5hv9afcEx1NzmXN7Ftd8Cs6iO/Zr/hh30n9QEgwKzqCwBtWQk4x1NGYkCftfYrdEtT1QvpmCTLn4oPOnv0sZzTVLpvuk2bu/tOSpzeANC/EE1j4srb9qvfzWrsqf0DR2TjuWDwQ18AAAAASUVORK5CYII=