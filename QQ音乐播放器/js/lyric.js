(function(window){
	function Lyric(path){
		return new Lyric.prototype.init(path);
	}
	Lyric.prototype = {
		constructor:Lyric,
		init : function(path){
			this.path = path;
		},
		loadLyric:function(){
			var $this = this
			$.ajax({
			url:$this.path,
			dataType:"txt",
			success:function(data){
				// console.log(data)
				$this.parseLyric(data);
			},
			error:function(e){
				console.log(e);
			}
		})
		},
		parseLyric:function(data){
			var array = data.split("\n");
			console.log(array);
			var timeReg = /\[\d*:\d*\.\d*\]/
			//遍历取出每一条歌词
			$.each(array,function(index,ele){
				var res = timeReg.exec(ele);
				if(res == null) return true;
				
			})
		}

	}
	Lyric.prototype.init.prototype = Lyric.prototype;
	window.Lyric = Lyric;
})(window)