function ProjectModule(projectData) {
  //recieves array of project data
  this.data = projectData;
  console.log(this.data);
};

ProjectModule.prototype.run = function() {
  //sort the data array
  this.data.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  //
  console.log(this.data);

};

//load in data and load
new ProjectModule(projectData).run();
