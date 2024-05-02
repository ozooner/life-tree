
var myTemplateConfig = {
  //colors: [ "#2aa198", "#b58900", "#dc322f", "#268bd2", '#d33682' ], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    spacingX: 50,
    //showLabel: true,                  // display branch names on graph
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: true,
      displayBranch: true,
      displayHash: true,
      font: "normal 14pt Arial"
    },
    //tooltipHTMLFormatter: function ( commit ) {
      //return "" + commit.sha1 + "" + ": " + commit.message;
    //}
  }
};
//var myTemplate = new GitGraph.Template( myTemplateConfig );

var gitgraph = new GitGraph({
  //template: myTemplate,
  orientation: 'vertical-reverse',
  //mode: 'compact',
  //shouldDisplayTooltipsInCompactMode: false,
  //tooltipHTMLFormatter: function ( commit ) {
    //return "" + commit.sha1 + "" + ": wazz " + commit.message;
  //} 
  author: ""
});
gitgraph.template.commit.widthExtension = 200;

var colors = {
  life: '#2aa198',
  kindergarten: '#f1c109',
  school: '#dc322f',
  uni: '#008fb5',
  telema: '#d33682',
  ipinion: '#dc322f',
  fadeit: '#073642',
  //fadeit: '#586e75',
  talents: '#f1c109',
  army: '#859900',
  play: '#00aeef',
  taltech: '#e4067e',
}

var life = gitgraph.branch({column: 0, name: "life", color: colors.life, commitDefaultOptions: {color: colors.life}});
life.commit({
  sha1: "12.05.1991",
  message: "Create branch 'life', initial commit, born",
  tag: "v0.1.0",
});
life.commit({
  sha1: "22.05.1991",
  message: "Given name: Sander Sink",
});
life.commit({
  sha1: "10.07.1993",
  message: "Add Estonian as native language",
});

var kindergarten = gitgraph.branch({column: 1, name: "kindergarten", color: colors.kindergarten, commitDefaultOptions: {color: colors.kindergarten}});
kindergarten.commit({
  sha1: "01.09.1994",
  message: "Create branch 'kindergarten'"
});
kindergarten.commit({
  sha1: "21.06.1998",
  message: "Graduated"
});
kindergarten.merge(life, { sha1: "22.06.1998", tag: "v0.2.0" });

var school = gitgraph.branch({column: 1, name: "school", color: colors.school, commitDefaultOptions: {color: colors.school}});
school.commit({
  sha1: "01.09.1998",
  message: "Create branch 'school' - Tallinna Nõmme Gümnaasium"
});
school.commit({
  sha1: "20.05.2008",
  message: "Add English, fluent"
});
life.commit({
  sha1: "28.07.2009",
  message: "Learned Photoshop",
});
life.commit({
  sha1: "05.08.2009",
  message: "Acquired B category driver's license",
});
school.commit({
  sha1: "20.06.2010",
  message: "Graduated in mathematics oriented class"
});
school.merge(life, { sha1: "21.06.2010", tag: "v0.3.0" });
life.commit({
  sha1: "16.08.2009",
  message: "Obtained A category driver's license",
});
var uni = gitgraph.branch({column: 1, name: "university", color: colors.uni, commitDefaultOptions: {color: colors.uni}});
uni.commit({
  sha1: "01.09.2009",
  message: "Create branch 'Business Academy Aarhus' in Denmark"
});
uni.commit({
  sha1: "30.11.2011",
  message: "Add Java"
});
uni.commit({
  sha1: "02.05.2012",
  message: "Added Android development"
});
uni.commit({
  sha1: "21.05.2012",
  message: "Add C# and .NET"
});
var telema = gitgraph.branch({parentBranch: uni, name: "telema", column: 2, color: colors.telema, commitDefaultOptions: {color: colors.telema}});
telema.commit({
  sha1: "02.06.2012",
  message: "Internship at Telema in Estonia (Java developer)",
  //detailId: "telema"
});
telema.commit({
  sha1: "28.11.2012",
  message: "Add Spring MVC, Maven, Git bash and Oracle PL/SQL"
});
telema.commit({
  sha1: "19.12.2012",
  message: "Finish internship"
});
telema.merge(uni, { sha1: "20.12.2012"});
uni.merge(life, { sha1: "22.01.2013", message: "Graduate with AP degree"});

var ipinion = gitgraph.branch({name: "ipinion", column: 2, color: colors.ipinion, commitDefaultOptions: {color: colors.ipinion}});
ipinion.commit({
  sha1: "07.02.2013",
  message: "Software developer at iPinion in Denmark"
});

uni.commit({
  sha1: "04.04.2013",
  message: "Add Javascript, MsSQL, Messaging"
});

ipinion.commit({
  sha1: "15.07.2013",
  message: "Add PHP, Drupal, MySQL, Apache"
});

life.commit({
  sha1: "18.08.2013",
  message: "Switched from qwerty to colemak keyboard layout"
});

life.commit({
  sha1: "11.09.2013",
  message: "Started using Linux as primary OS (Kubuntu)"
});

life.commit({
  sha1: "30.09.2013",
  message: "GOTO; conference in Aarhus"
});

ipinion.commit({
  sha1: "01.11.2013",
  message: "IPVision acquired iPinion"
});

var fadeit = gitgraph.branch({parentBranch: ipinion, name: "fadeit", column: 2, color: colors.fadeit, commitDefaultOptions: {color: colors.fadeit}});

fadeit.commit({
  sha1: "01.11.2013",
  message: "Co-founded Fadeit ApS"
});

var talents = gitgraph.branch({parentBranch: uni, name: "talents23", column: 3, color: colors.talents, commitDefaultOptions: {color: colors.talents}});

talents.commit({
  sha1: "13.01.2014",
  message: "Internship at Talents23 GmbH in Munich, Germany"
});

talents.commit({
  sha1: "27.03.2014",
  message: "Working with Zend Framework and PostgreSQL"
});

talents.commit({
  sha1: "18.05.2014",
  message: "Bachelor Thesis on Naïve Bayes classifier"
});

talents.merge(uni, { sha1: "01.06.2014", message: "Internship finished, moving back to Denmark"});
uni.merge(life, { sha1: "25.06.2014", message: "Bachelor's degree in Software Engineering", tag: "v1.0.0"});

fadeit.commit({
  sha1: "17.09.2014",
  message: "Automation with Puppet and Vagrant"
});

life.commit({
  sha1: "29.09.2014",
  message: "GOTO 2014; with AngularJS training"
});

fadeit.commit({
  sha1: "17.10.2014",
  message: "TDD in Python for Flask framework"
});

life.commit({
  sha1: "01.11.2014",
  message: "Started using VIM editor for coding"
});

fadeit.commit({
  sha1: "20.12.2014",
  message: "Developed hopper.dk as in-house project (Flask, Angular, Postgres, Grunt, NGINX)"
});

fadeit.commit({
  sha1: "12.06.2014",
  message: "Developed shop.digitrans.dk (Express, Angular, Mongo, Gulp)"
});

fadeit.commit({
  sha1: "18.01.2015",
  message: "Developed my.airgate.dk (Express, React, Mysql, Webpack)"
});


fadeit.commit({
  sha1: "18.05.2015",
  message: "Developing playsignage.com as in-house project (Flask, Angular, Postgres, Gulp, NGINX, Cordova)"//chrome extension
});

var play = gitgraph.branch({parentBranch: fadeit, name: "play", column: 2, color: colors.play, commitDefaultOptions: {color: colors.play}});

life.commit({
  sha1: "06.09.2015",
  message: "Participated in TransferWise fintech hackaton"
});

play.commit({
  sha1: "20.03.2016",
  message: "Play Digital Signage has outgrown fadeit"
});

var army = gitgraph.branch({parentBranch: life, name: "military", column: 1, color: colors.army, commitDefaultOptions: {color: colors.army}});

army.commit({
  sha1: "05.07.2016",
  message: "Drafted into mandatory conscription in Estonian military"
});

//army.commit({
  //sha1: "16.09.2016",
  //message: "Completed soldier basic training"
//});

army.commit({
  sha1: "17.12.2016",
  message: "Earned sergeant rank"
});

army.commit({
  sha1: "13.05.2017",
  message: "Radio equipment, networking & security at Signal Battalion"
});

army.merge(life, { sha1: "31.05.2017", message: "11 month conscription finished", tag: "v1.1.0"});


life.commit({
  sha1: "13.07.2017",
  message: "Switched to Arch Linux from Kubuntu"
});

play.commit({
  sha1: "24.09.2017",
  message: "Desktop applications (Windows/OSX/Linux) for PlaySignage using Electron"
});

var taltech = gitgraph.branch({parentBranch: life, name: "taltech", column: 1, color: colors.taltech, commitDefaultOptions: {color: colors.taltech}});
taltech.commit({
  sha1: "03.09.2019",
  message: "Financial analysis course in TalTech"
});

taltech.merge(life, { sha1: "26.11.2019", message: "Financial analasys course passed with 95%"});


play.commit({
  sha1: "15.11.2019",
  message: "Geo-scaling PlaySignage to US and EU server clusters"
});

play.commit({
  sha1: "03.07.2020",
  message: "Rolled out Progressive Web Apps of web player and web portal"
});

var taltech = gitgraph.branch({parentBranch: life, name: "taltech", column: 1, color: colors.taltech, commitDefaultOptions: {color: colors.taltech}});
taltech.commit({
  sha1: "15.09.2020",
  message: "Tax laws and accounting course at TalTech"
});

taltech.merge(life, { sha1: "20.11.20", message: "Tax laws and accounting course passed with 86%"});

play.commit({
  sha1: "06.01.2021",
  message: "Developed player app for Samsung Tizen operating system"
});

life.commit({
  sha1: "17.03.2022",
  message: "Switched to OSX"
});

life.commit({
  sha1: "06.09.2022",
  message: "Participated in Garage 48 - Digital Construction Hackaton"
});

play.commit({
  sha1: "17.10.2023",
  message: "Developed player app for LG TV's on WebOS operating system"
});

play.commit({
  sha1: "23.01.2024",
  message: "Developed player app BrightSign operating system"
});

play.commit({
  sha1: "23.04.2024",
  message: "New playsignage.com website with Strapi CMS, Next.js, React and Cloudflare Pages"
});
