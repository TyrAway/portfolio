
/*
 * GET home page.
 */
 
var pageDb = {
	title: "Timothy Moran ",
	subtitle: "Desktop & Web Development",
	intro: "I am a software developer working for a small company in Portland, where I specialize in making line-of-business software in C# for our call center and nationwide field support team. Below are the major projects, as well as my resume.",
	projects: [ 
		{
			title: "Affinity",
			navigation: "Desktop",
			body: [
				"Affinity (I didn't pick the name) is an all-in-one desktop application for ticket tracking, inventory management, and parts ordering and processing. It uses Windows Presentation Foundation (WPF) to organize workspaces into a browser-style tabbed document interface, and the Entity Framework ORM to handle MS SQL interaction.",
				"Affinity follows the Model View ViewModel (MVVM) pattern, making heavy use of complex UI data-binding. The interface responds to user input by highlighting errors, hiding or showing elements, and disabling or enabling action buttons. Each interface is also designed to allow easy use in anything from a maximized to a quarter-screen sized window by using grids and wrap panels to intelligently control layout on the fly.",
				"Because Affinity is an in-house application, heavily tailored for its specific workflow and used by several departments, it enjoys a rapid development and release cycle. Redmine, an open-source project management tool, is used to track feature requests and bug reports, new development, and coordinate with the beta testing team. Live releases sometimes occur as often as every week."
			],
			images: [
				{ path: "affinity_ticket.jpg", thumb: "affinity_ticket_thumb.jpg", title: "Viewing a ticket in the tabbed interface."},
				{ path: "affinity_category.jpg", thumb: "affinity_category_thumb.jpg", title: "A very large treeview that populates nodes on-demand."},
				{ path: "affinity_parts.jpg", thumb: "affinity_parts_thumb.jpg", title: "Parts lookup and ordering interface."}
			]
		},
		{
			title: "Affinity Web",
			navigation: "Web",
			body: [
				"Affinity web is the web counterpart to the desktop version of Affinity. It is used by the field support team, which operates nationwide, and by several clients. It is built on ASP.NET MVC3 with jQuery, and uses the Entity Framework ORM to handle MS SQL interaction. It is standards compliant, and can be accessed on any desktop or mobile browser.",
				"Affinity web was my first web development project. I learned MVC3 and jQuery while working on this project, and completed the original scope of work in six weeks (including the time it took to learn the framework). It has a smaller feature set than the desktop version, focusing primarily on ticket management and report generation."
			],
			images: [
				{ path: "web_home.jpg", thumb: "web_home_thumb.jpg", title: "The home page, showing a technicians open tickets."},
				{ path: "web_rtm.jpg", thumb: "web_rtm_thumb.jpg", title: "A report generating tool for customers."},
				{ path: "web_ticket.jpg", thumb: "web_ticket_thumb.jpg", title: "The ticket interface for the web version."}
			]
		},
		{
			title: "NW Maico & CZ",
			navigation: "E-Commerce",
			body: [
				"NW Maico & CZ is a single-page ecommerce application built using ASP.NET MVC3 and the KnockoutJS framework (an MVVM framework for the web). It integrates with the PayPal API to handle payments and generate detailed order invoices.",
				"KnockoutJS is the real workhorse behind this application. It uses data-binding and dependency chains to create self-updating interfaces from models with very little code. It also has its own template engine, which allows us to minimize server-to-client data transfer by sending only new information (instead of a whole new page of HTML), and use a single page to display an entire store."
			],
			images: [
				{ path: "nw_home.jpg", thumb: "nw_home_thumb.jpg", title: "The landing page."},
				{ path: "nw_parts.jpg",  thumb: "nw_parts_thumb.jpg",title: "A part category, with the cart open."}
			]
		}
	]
}

exports.index = function(req, res){
  res.render('index', { m: pageDb })
};