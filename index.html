<!DOCTYPE html>
<html>
<head>
    <script src="https://d3js.org/d3.v5.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="script.js" charset="utf-8"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<!--Head Bar-->
<div id="nav">
    <div id="logo"><embed width="200" height="60" src="logo.svg" type="image/svg+xml" /></div>
    <div class="collapse navbar-collapse">
        <ul>
            <li><a class = "nav-link" href="#introduction">Introduction</a></li>
            <li><a class = "nav-link" href="#challenges">Challenges</a></li>
            <li><a class = "nav-link" href="#construction">Construction</a></li>
            <li><a class = "nav-link" href="#statistics">Statistics</a></li>
        </ul>
    </div>
</div>
<!--Title-->
<div id="title-line">
    <div>
        <h1>Expertise Style Transfer: A New Task Towards Better Communication
            between Experts and Laymen</h1>
    </div>
    <div class="title-link red">
        <a href="https://arxiv.org/abs/2005.00701" target="_blank">Paper</a>
    </div>
    <div class="title-link blue">
        <a href="https://drive.google.com/drive/folders/15n14BcbZDc7FX-PeRlbjCV_kAbDDjePw" target="_blank">Dataset</a>
    </div>

</div>
<div id="content">
    <!--1. Introduction-->
    <div class="section" id="introduction">
        <h3>Introduction</h3>
        
        <p>Expertise Style Transfer (EST) is a new task of text style transfer between expert language and layman language, which is to tackle the problem of discrepancies between an expert's advice and a layman's understanding of it. This problem is usually caused by the prvasive cognitive bias exhibited across all domains. We contribute a manually annotated dataset, namely MSD, in the medical domain to promote research into this task.</p>

    </div>

    

    <!--2. Challenges-->
    <div class="section" id="challenges">
        <h3>Challenges</h3>
        
        
        <p>Our dataset is challenging from two aspects:</p>
        <ul>
        <li><p><B>Knowledge Gap</B>: Domain knowledge is the key factor that influences the expertise level of text, which is also a key difference from conventional styles. We identify two major types of knowledge gaps in MSD: <span>terminology</span>, e.g., dyspnea in the first example of Figure 1; and <span>empirical evidence</span> in the second example, that is, doctors prefer to use statistics (About 1/1000), while laymen do not (quite small)</p></li>
        <li><p><B>Lexical & Structural Modification</B>: Fu et al.(2019) has indicated that most ST models only perform lexical modification, while leaving structures unchanged. Actually, syntactic structures play a significant role in language styles, especially regarding complexity or simplicity (Carroll et al.,1999). As shown in the third example in Figure 1, a complex sentence can be expressed with several simple sentences by appropriately splitting content. However, available datasets rarely contain such cases.</p></li>
        </ul>
    
        <div id="fig1">
            <!--300*100-->
            <embed width="1050" height="350" src="example.svg" type="image/svg+xml" />
            <div class="note">Figure 1: Example of Expertise Style Transfer.</div>
        </div>
        
        
        
        <!--Interaction here-->

    </div>
    <!--3. Construction-->
    <div class="section" id="construction">
        <h3>Construction</h3>
        <p>The dataset is derived from the world's most trusted health references, The Merck Manuals, also known as the MSD Manuals. Each article is written through a collaboration between hundreds of medical experts, and includes two versions: one tailored for consumers and the other for professionals.</p>
        <p>Our MSD dataset is constructed in three steps:</p>
        <ul>
            <li><p><b>Data Preprocessing</b> We first collect the raw texts from the MSD website, and obtain 2601 professional and 2487 consumer documents with 1185 internal links (disambiguated by mathching the document title and its accompanied ICD-9 code) among them. Then, we find 2551 possible parallel groups of sentences by matching their document titles and subsection titles, which denote medical PCIO elements, such as the Diagnosis and Symptoms. For example, all sentences for <i>Atherosclerosis.Symptoms</i> in the professional MSD may be aligned with those for <i>Atherosclerosis.Signs</i> in the consumer MSD</p></li>
            
            <li><p><b>Expert Annotation</b> Given the aligned groups of sentences in professional and consumer MSD, we develop an annotation platform to facilitate expert annotations, and hire doctors to select sentences from each version of group to annotate pairs of sentences that have the same meaning but are written in different styles. The annotated sentence pairs can be used for evaluation.</p></li>
            
            <li><p><b>Knowledge Incorporation</b> To facilitate knowledge-aware analysis, we use QuickUMLS to automaticlly link entity mentions, i.e., medical concepts, to Unified Medical Language System (UMLS). Each mention may refer to multiple concepts, e.g., <i>dyspnea</i> is linked to concept <i>C0013404</i></p></li>
        </ul>
        <p>Through this three step process, we obtain a large set of (non-parallel) training sentences in each style, and a small set of parallel sentences for evaluation.</p>
    </div>
    
    <!--4. Statistics-->
    <div class="section" id="statistics">
        <h3>Statistics</h3>
        <table>
        <tr>
        <td>
            <p>This part gives some statistics of the MSD dataset and compares it with other Style Transfer (ST) and Text Simplification (TS) datasets.</p>
        <p>The documents of MSD Manuals cover a wide range of medical topics, the distribution on which is shown in Figure 2. The annotated sentence pairs in test set are also from several medical PCIO elements, whose proportion is shown in Figure 3. </p>
        
        
        <p>Table 1 presents the BLEU and edit distance (ED for short) scores of parallel sentences compared with existing TS and ST datasets. We see that:
            <ol>
                <li><p>1. MSD has the lowest BLEU and highest ED. This implies that MSD is very challenging that requires both lexical and structural modifications.</p></li>
                <li><p>2. TS datasets reflect more structural differences (with higher ED values) as compared to ST datasets. This means that TS datasets concerning the nature of language complexity (simplicity) are more complex to transfer.</p></li>
            </ol>
        </p>
        <div id="table1">
            <table>
                <tr>
                    <th>Datasets</th><th>BLEU</th><th>ED</th><th>Task</th>
                </tr><tr>
                    <td>GYAFC<sub>E&amp;M</sub></td><td>16.22</td><td>28.53</td><td>ST</td>
                </tr><tr>
                    <td>GYAFC<sub>F&amp;R</sub></td><td>16.95</td><td>29.53</td><td>ST</td>
                </tr><tr>
                    <td>Yelp</td><td>24.76</td><td>22.20</td><td>ST</td>
                </tr><tr>
                    <td>Amazon</td><td>44.52</td><td>19.75</td><td>ST</td>
                </tr><tr>
                    <td>Authorship</td><td>19.43</td><td>36.70</td><td>ST</td>
                </tr><tr>
                    <td>SimpWiki</td><td>49.98</td><td>64.16</td><td>TS</td>
                </tr><tr>
                    <td>MSD</td><td>14.01</td><td>139.73</td><td>ST&TS</td>
                </tr>
            </table>
            <div class="note">Table 1. BLEU (4-gram) and edit distance (ED for short) scores between parallel sentences.</div>
        </div>
        </td>
        <td>
            <div id="fig2">
                <svg id="topic_dis"></svg>
                <div class="note">Figure 2: Distribution of dataset based on topics.</div>
            </div>
            <div id="fig3">
                <svg id="pcio_dis"></svg>
                <div class="note">Figure 3: Distribution of testing set based on PCIO.</div>
            </div>
        </td>
        </tr>
        </table>
        
        


    </div>
    <!--5. Citation-->
    <div class="section" id="citation">
        <h3>Citation</h3>
        <p class="citation">
            @ARTICLE{2020arXiv200500701C,<br>
                author = \{\{Cao\}, Yixin and \{Shui\}, Ruihao and \{Pan\}, Liangming and \{Kan\}, Min-Yen and
                  \{Liu\}, Zhiyuan and \{Chua\}, Tat-Seng\},<br>
                 title = "\{Expertise Style Transfer: A New Task Towards Better Communication between Experts and Laymen\}",<br>
               journal = \{arXiv e-prints\},<br>
              keywords = \{Computer Science - Computation and Language\},<br>
                  year = 2020,<br>
                 month = may,<br>
                   eid = \{arXiv:2005.00701\},<br>
                 pages = \{arXiv:2005.00701\},<br>
         archivePrefix = \{arXiv\},<br>
                eprint = \{2005.00701\},<br>
          primaryClass = \{cs.CL\},<br>
                adsurl = \{https://ui.adsabs.harvard.edu/abs/2020arXiv200500701C\},<br>
               adsnote = \{Provided by the SAO/NASA Astrophysics Data System\}<br>
         \}
         
        </p>
    </div>
</div>
<div id="footnote">

</div>
</body>
</html>
