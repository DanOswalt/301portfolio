function Project (opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.details = opts.details;
  this.publishedOn = opts.publishedOn;
  this.publishedBy = opts.publishedBy;
  this.url = opts.url;
  this.codeUrl = opts.codeUrl;
  this.screenshot = opts.screenshot;
}

Project.prototype.toHtml = function() {
  var $newProject = $('.template').clone();

  $newProject.find('.title').html(this.title);
  $newProject.find('.description').html(this.description);
  $newProject.find('.details').html(this.details);
  $newProject.removeClass('template');

  return $newProject;
};

// rawData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// rawData.forEach(function(ele) {
//   articles.push(new Article(ele));
// });
//
// articles.forEach(function(a){
//   $('#articles').append(a.toHtml());
// });
