'use strict';

angular.module('homeApp').controller 'MainController',($scope)->
	
	$scope.listBlock = [
		{
			name: '新闻'
			url: '#'
		},{
			name: '生活'
			url: '#'
		},{
			name: '娱乐'
			url: '#'
		},{
			name: '购物'
			url: '#'
		},{
			name: '看书'
			url: '#'
		},{
			name: '教育'
			url: '#'
		},{
			name: '工具'
			url: '#'
		},{
			name: '理财'
			url: '#'
		},{
			name: '工作'
			url: '#'
		}
	]

	#set dom size
	setSize = ()->
		pageHeight = $(window).height()
		$('#mainBox').css {'height':pageHeight-107}
	setSize()

	return null

	