const all_projects = document.getElementsByClassName('project');


for (let i = 0; i < all_projects.length; i++) {
  const proj = all_projects[i];
  proj.addEventListener('mouseenter', function () {
    const proj_img_holder = proj.getElementsByClassName('project-img')[0];
    const img_ = proj_img_holder.getElementsByTagName('img')[0]
    const img_offset = img_.offsetHeight;
    proj_img_holder.scroll({ behavior: 'smooth', block: 'center', inline: 'center', top: img_offset });
  });
}

for (let i = 0; i < all_projects.length; i++) {
  const proj = all_projects[i];
  proj.addEventListener('mouseleave', function () {
    const proj_img_holder = proj.getElementsByClassName('project-img')[0];
    // const img_ = proj_img_holder.getElementsByTagName('img')[0]
    // const img_offset = img_.offsetHeight;
    proj_img_holder.scroll({ behavior: 'smooth', block: 'end', inline: 'center', top: 0 });
  });
}

function openCloseMenu() {
  if (document.getElementById('menu-holder').classList.contains('open')) {
    document.getElementById('menu-holder').classList.remove('open');
    document.getElementById('menu-holder').classList.add('close');
  } else {
    document.getElementById('menu-holder').classList.remove('close');
    document.getElementById('menu-holder').classList.add('open');
  }
}
