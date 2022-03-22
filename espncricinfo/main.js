let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
const request=require("request");
const cheerio=require("cheerio");

request(url,cb);

function cb(err,res,body)
{
    if(err)
    {
        console.log("error",err);
    }
    else
    {
        handleHTML(bosy);
    }
}

function handleHTML(html)
{
    let selecTool=cheerio.load(html);
    let anchorElem=selecTool('a[data-hover="View All Results"]');

    let relativeLink=anchorElem.attr("href");
    console.log(relativeLink);
    let fullLink="https://www.espncricinfo.com"+relativeLink;
    
}