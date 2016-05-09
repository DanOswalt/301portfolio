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
  console.log($newProject.html());

  $newProject.find('.title').html(this.title);
  $newProject.find('.description').html(this.description);
  $newProject.find('.details').html(this.details);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newProject.find('address a').attr('href', this.author);
  $newProject.find('.title a').attr('href', this.url);
  $newProject.find('.code-link a').attr('href', this.url);
  $newProject.find('img').attr('src', this.screenshot);
  $newProject.removeClass('template');
  console.log($newProject.html());
  return $newProject;
};
