document.addEventListener("DOMContentLoaded", main);

function main(){
    $("#btn-verify").click(verify);
    $("#btn-show").click(show_another);
    $(".interact-sent").click(example_click);
    show_another();
    draw_medical_topic();
    draw_PCIO();
}

var example_data = [
    [
        ["e", "Pain is usually felt over the inflamed site, but referred pain is possible."], ["ne", "The pain is usually felt in the chest wall right over the site of the inflammation or infection that caused the effusion."]],
    [
        ["ne", "Symptoms of granuloma inguinale usually begin 1 to 12 weeks after infection. The first symptom is a painless, red nodule that slowly enlarges into a round, raised, foul-smelling lump."], 
        ["e", "After an incubation period of about 1 to 12 weeks, a painless, red skin nodule slowly enlarges, becoming a raised, beefy red, moist, smooth, foul-smelling lesion."]],
    [
        ["e", "The lesion slowly enlarges, often ulcerates, and may spread to other skin areas. Lesions heal slowly, with scarring."],
        ["ne", "The sores slowly enlarge and spread to nearby tissue, causing further damage. Sores heal slowly and may result in permanent scar."]
    ],
    [
        ["e", "The patients usually feel painful when affected tendons are actively moved or their natural motions are resisted."],
        ["ne", "People always feel painful when the inflamed tendons are moved or pressed."],
    ],
    [
        ["e", "Cardiac complications include pericarditis (most commonly)，myocarditis，endocardium and coronary artery vasculitis."],
        ["ne", "People with lupus may have chest pain due to inflammation of the sac around the heart (pericarditis). More serious but rare effects on the heart are inflammation of the walls of the coronary arteries (coronary artery vasculitis), which can lead to angina; the inflammation of  the surfaces of the heart valve to thicken or develop lesions(bacterial endocarditis); and inflammation of the heart muscle (myocarditis), which can lead to heart failure."],
    ]
];
var example_idx = -1;

function verify(){
    verify_one($("#int-sent-1"));
    verify_one($("#int-sent-2"));
}

function verify_one(sent_div){
    var status = sent_div.attr("data-status");
    var label = sent_div.attr("data-label");
    console.log(status);
    console.log(label);
    if(status=="select" && label == "e"){
        sent_div.attr("data-status", "right");
    }
    else if(status=="select" && label == "ne"){
        sent_div.attr("data-status", "wrong");
    }
    else if(status=="normal" && label == "e"){
        sent_div.attr("data-status", "right");
    }
}

function show_another(){
    example_idx = example_idx+1<example_data.length?example_idx+1:0;
    $(".interact-sent").attr("data-status", "normal");
    $("#int-sent-1 p").text(example_data[example_idx][0][1]);
    $("#int-sent-1").attr("data-label", example_data[example_idx][0][0]);
    $("#int-sent-2 p").text(example_data[example_idx][1][1]);
    $("#int-sent-2").attr("data-label", example_data[example_idx][1][0]);
}

function example_click(){
    if($(this).attr("data-status")=="normal"){
        $(this).attr("data-status", "select");
        $(this).siblings().attr("data-status", "normal");
    }
    else if($(this).attr("data-status")=="select"){
        $(this).attr("data-status", "normal");
    }
}

function draw_medical_topic(){
    var dataset = [96, 76, 70, 59, 51, 46, 38, 33, 31, 26, 26, 23, 23, 20, 57];
    var label = [
                "Infectious Diseases",
                "Pediatrics",
                "Gastrointestinal Disorders",
                "Musculoskeletal Disorders",
                "Neurologic Disorders",
                "Gynecology and Obstetrics",
                "Pulmonary Disorders",
                "Ear, nose, and Throat Disorders",
                "Eye Disorders",
                "Hepatic and Biliary Disorders",
                "Injuries Poisoning",
                "Psychiatric Disorders",
                "Dermatologic Disorders",
                "Genitourinary Disorders",
                "Other"];
    //var color = d3.scaleOrdinal(d3.schemeCategory10);
    var color = d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), dataset.length).reverse();
    var pie = d3.pie().sort(null);
    var pie_data = pie(dataset);
    var outerRadius = 120;
    var innerRadius = 60;
    var arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
    var width = 600;
    var height = 400;
    var svg = d3.select("#topic_dis")
                .attr("width", width)
                .attr("height", height);
    var arcs = svg.selectAll("g")
                .data(pie_data)
                .enter()
                .append("g")
                .attr("transform", `translate(180,${height/2})`);
    arcs.append("path")
        .attr("fill",function(d,i){
            return color[i];
        })
        .attr("d",function(d){
            return arc(d);   //调用弧生成器，得到路径值
        })
        .on("mouseover", function(d, i){
            d3.select(this).transition().duration(400).ease(d3.easeQuad)
                .attr("transform", function(d){
                    var xy = arc.centroid(d).map(x=>x/5);
                    return `translate(${xy})`;
                })
        })
        .on("mouseout", function(d,i){
            d3.select(this).transition().duration(400)
                .attr("transform", x=>`translate(0,0)`);
        });
    arcs.append("text")
        .attr("transform",function(d, i){
            if(i==2) {
                var xy = arc.centroid(d).map(x=>x*1.65);
            }
            else if(i>=1 && i<=5 || i>=6 && i<=13){
                var xy = arc.centroid(d).map(x=>x*1.6);
            }
            else {
                var xy = arc.centroid(d).map(x=>x*1.5);
            }

            return `translate(${xy})`;
        })
        .attr("text-anchor","middle")
        .style("font-family", "cambria")
        .text(function(d, i){
            var percent = d.data / d3.sum(dataset) * 100;
            return `${percent.toFixed(1)}%`;
        });
    

    //绘制图例区域
    var legendArea = svg.append("g")
        .attr("transform", `translate(380,20)`);

    //绑定数据，设置每个图例的位置
    var legend = legendArea.selectAll("g")
        .data(label)
        .enter()
        .append("g")
        .attr("transform", (d,i)=>`translate(0, ${i*25})`);

    //添加图例的矩形色块
    legend.append("rect")
        .attr("width", 40)
        .attr("height", 18)
        .style("fill", function (d, i) {
            return color[i]
        });

    //添加图例文字
    legend.append("text")
        .attr("x", 45)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text(function (d, i) {
            return d;
        })
        .style("font-family", "cambria")
        .style("font-size", 14);

}

function draw_PCIO(){
    var dataset = [416, 107, 76, 53, 20, 3];
    var label = [
        'Symptoms',
        'Diagnosis',
        'Treatment',
        'Etiology',
        'Evaluation',
        'Prognosis'
    ];

    //var color = d3.scaleOrdinal(d3.schemeCategory10);
    var color = d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), dataset.length).reverse();
    var pie = d3.pie().sort(null);
    var pie_data = pie(dataset);
    var outerRadius = 120;
    var innerRadius = 60;
    var arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
    var width = 500;
    var height = 350;
    var svg = d3.select("#pcio_dis")
                .attr("width", width)
                .attr("height", height);
    var arcs = svg.selectAll("g")
                .data(pie_data)
                .enter()
                .append("g")
                .attr("transform", `translate(240,220)`);
    arcs.append("path")
        .attr("fill",function(d,i){
            return color[i];
        })
        .attr("d",function(d){
            return arc(d);   //调用弧生成器，得到路径值
        })
        .on("mouseover", function(d, i){
            d3.select(this).transition().duration(400).ease(d3.easeQuad)
                .attr("transform", function(d){
                    var xy = arc.centroid(d).map(x=>x/5);
                    return `translate(${xy})`;
                })
        })
        .on("mouseout", function(d,i){
            d3.select(this).transition().duration(400)
                .attr("transform", x=>`translate(0,0)`);
        });
    
    var text_times = [2.2, 2, 2, 2.05, 1.6, 2.1];
    var line_times = [1.9, 1.6, 1.8, 2, 1.6, 2];
    arcs.append("text")
        .attr("transform",function(d, i){
            
            var xy = arc.centroid(d).map(x=>x * text_times[i]);
            return `translate(${xy})`;
        })
        .attr("text-anchor","middle")
        .style("font-family", "cambria")
        .text(function(d, i){
            var percent = d.data / d3.sum(dataset) * 100;
            return `${label[i]} ${percent.toFixed(1)}%`;
        });
    arcs.append('line')
        .attr('stroke', 'black')
        .attr('x1', function(d){ return arc.centroid(d)[0] * 4/3; })
        .attr('y1', function(d){ return arc.centroid(d)[1] * 4/3; })
        .attr('x2', function(d, i){
        return arc.centroid(d)[0] * line_times[i];
        })
        .attr('y2', function(d, i){
        return arc.centroid(d)[1] * line_times[i];
        });
}