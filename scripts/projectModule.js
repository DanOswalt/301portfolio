function ProjectModule(projectData) {
  //receives array of project data
  this.data = projectData;
};

ProjectModule.prototype.load = function() {
  //sort the data array
  this.data.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  //make an array of
  this.data.forEach( function(projectData) {
    var newProject = new Project(projectData);
    $('#projects-module').append(newProject.toHtml());
  });

};

new ProjectModule(projectData).load();
