(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{397:function(e,n){var a;(a=Prism).languages.erb=a.languages.extend("ruby",{}),a.languages.insertBefore("erb","comment",{delimiter:{pattern:/^<%=?|%>$/,alias:"punctuation"}}),a.hooks.add("before-tokenize",function(e){a.languages["markup-templating"].buildPlaceholders(e,"erb",/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm)}),a.hooks.add("after-tokenize",function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"erb")})}}]);