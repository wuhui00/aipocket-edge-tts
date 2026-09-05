const voices = [
  ["zh-CN-XiaoxiaoNeural", "晓晓", "温柔"],
  ["zh-CN-XiaoyiNeural", "晓伊", "甜美"],
  ["zh-CN-XiaochenNeural", "晓辰", "知性"],
  ["zh-CN-XiaohanNeural", "晓涵", "优雅"],
  ["zh-CN-XiaomengNeural", "晓梦", "梦幻"],
  ["zh-CN-XiaomoNeural", "晓墨", "文艺"],
  ["zh-CN-XiaoqiuNeural", "晓秋", "成熟"],
  ["zh-CN-XiaoruiNeural", "晓睿", "智慧"],
  ["zh-CN-XiaoshuangNeural", "晓双", "活泼"],
  ["zh-CN-XiaoxuanNeural", "晓萱", "清新"],
  ["zh-CN-XiaoyanNeural", "晓颜", "柔美"],
  ["zh-CN-XiaoyouNeural", "晓悠", "悠扬"],
  ["zh-CN-XiaozhenNeural", "晓甄", "端庄"],
  ["zh-CN-YunxiNeural", "云希", "清朗"],
  ["zh-CN-YunyangNeural", "云扬", "阳光"],
  ["zh-CN-YunjianNeural", "云健", "稳重"],
  ["zh-CN-YunfengNeural", "云枫", "磁性"],
  ["zh-CN-YunhaoNeural", "云皓", "豪迈"],
  ["zh-CN-YunxiaNeural", "云夏", "热情"],
  ["zh-CN-YunyeNeural", "云野", "野性"],
  ["zh-CN-YunzeNeural", "云泽", "深沉"]
].map(([id, name, description]) => ({
  id,
  voice_id: id,
  name,
  display_name: name,
  language: "zh-CN",
  description,
  model: "tts-1"
}));

export default function onRequest() {
  return new Response(JSON.stringify({ object: "list", data: voices }), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
