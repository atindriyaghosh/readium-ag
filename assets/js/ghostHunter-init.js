var searchField = $("#search-field").ghostHunter({
            results   : "#results",
            onKeyUp   : true,
			info_template: "<span class='at_search_clear_toggle' onclick='clearResults()'>&#215;</span> <span class='at_search_results_amount'>Total Results: {{amount}}</span></span>",
			result_template : "<span class='at_search_results_link'><a href='{{link}}'><span>{{title}}</span></a></span>",
			rss: "/rss"
         });
		 
function clearResults(){
	searchField.clear();
}