 var btn = document.getElementById('btn');
 var output = document.getElementById('output')
 var quote = [
    '<h3>" لا أخاف الموت ..أخاف أن أموت قبل أن أحيا "</h3> <p>- أحمد خالد توفيق</p>' ,
    '<h3>" الثقة بالنفس كلام فارغ ..سوف يدهشك كم الأشياء التي لا تعرفها أو لا تجيدها .. المهم أن تثق بقدرتك على أن تكون أفضل "</h3> <p>- أحمد خالد توفيق</p>' ,
    '<h3>" إعمل الخير وارمه في البحر .. بشرط أن يراك أحدهم وأنت تفعل ذلك .. عندها سيخبر الآخرين أنك لا تفعل الخير فقط، بل وترميه في البحر أيضاً  "</h3> <p>- أحمد خالد توفيق</p>' ,
    '<h3>" الصباح الذي لا تسمع فيه صباح الخير ممن تحب، يبقى ليلًا حتى إشعارٍ آخر. "</h3> <p>- محمود درويش</p>' ,
    '<h3>" ما أجمل الصدفة، إنّها خالية من الانتظار. "</h3> <p>- محمود درويش</p>' ,
    '<h3>" الطرق تؤدي إليك، حتّى تلك التي سلكتُها لنسيانك. "</h3> <p>- محمود درويش</p>' ,
    '<h3>" To go wrong in ones own way is better than to go right in someone elses. "</h3> <p>- Fyodor Dostoevsky</p>' ,
    '<h3>" But how could you live and have no story to tell? "</h3> <p>- Fyodor Dostoevsky</p>' ,
    '<h3>" Taking a new step, uttering a new word, is what people fear most.” "</h3> <p>- Fyodor Dostoevsky</p>' ,
    '<h3>" Much unhappiness has come into the world because of bewilderment and things left unsaid. "</h3> <p>- Fyodor Dostoevsky</p>' ,
    '<h3>" It is better to be unhappy and know the worst, than to be happy in a fools paradise. "</h3> <p>- Fyodor Dostoevsky</p>' ,
    '<h3>" To love is to suffer and there can be no love otherwise. "</h3> <p>- Fyodor Dostoevsky</p>' ,
    '<h3>" You can be sincere and still be stupid. "</h3> <p>- Fyodor Dostoevsky</p>' ,
    '<h3>" Nothing is easier than to denounce the evildoer; nothing is more difficult than to understand him. "</h3> <p>- Fyodor Dostoevsky</p>' ,
 ];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})