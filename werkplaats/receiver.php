<?php
// phpinfo();
// echo "JSON options<br><br>";
$string = file_get_contents("data/werkplaats-options.json");
$json_a = json_decode($string, true);
$html = "";

function show_nice_form_values($post, $json, $html) {
  foreach($json['fields'] as $key=>$value){
    if (array_key_exists('fields', $json['fields'][$key])) {
      // this is a nested array, with more form fields, so do something recursive here
      $html .= show_nice_form_values($post, $value, "");
    }
    else {
      if (array_key_exists('label', $json['fields'][$key])) {
        // print label from form field instead of raw variable name from POST
        $html .= "<p><b>";
        $html .= $json['fields'][$key]['label'];
        $html .= "</b><br/>";
      }
      if (array_key_exists($key, $post)) {
        // only show value if it is available in POST vars
        if ($key == "handtekening-verzorger-a" || $key == "handtekening-verzorger-b") {
          // display signature as image
          $html .= "<img src=\"" . $post[$key] . "\">";
        }
        elseif (array_key_exists('optionLabels', $json['fields'][$key])) {
          // print optionLabel from radiobuttons in form instead of raw value from POST
          $html .= $json['fields'][$key]['optionLabels'][$post[$key]];
          // $html .= "OPTIONLABEL" . $_POST[$key] . " - " . $input[$key]['optionLabels'][$_POST[$key]];
        } elseif ($post[$key] == ""){
          $html .= "-";
        } else {
          $html .= $post[$key];
        }
      } else {
        $html .= "-";
      }
    }
    $html.="</p>";
  }
  return $html;
}

$pdf_data = show_nice_form_values($_POST, $json_a, "");





// Include the main TCPDF library (search for installation path).
require_once('TCPDF/tcpdf.php');

// Extend the TCPDF class to create custom Header and Footer
class MYPDF extends TCPDF {

    //Page header
    public function Header() {
        // Logo
        // $image_file = K_PATH_IMAGES.'logo_example.jpg';
        // $this->Image($image_file, 10, 10, 15, '', 'JPG', '', 'T', false, 300, '', false, false, 0, false, false, false);
        // Set font
        $this->SetFont('dejavusans', 'I', 12);
        // Title
        $this->Cell(0, 15, 'Aanmelding basisschool de Werkplaats (' . date("d-m-Y H:i:s"). ')', 0, false, 'C', 0, '', 0, false, 'M', 'M');
    }

    // Page footer
    public function Footer() {
        // Position at 15 mm from bottom
        $this->SetY(-15);
        // Set font
        $this->SetFont('dejavusans', 'I', 8);
        // Page number
        $this->Cell(0, 10, 'Pagina '.$this->getAliasNumPage().'/'.$this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
    }
}



// create new PDF document
$pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Basisschool de Werkplaats');
$pdf->SetTitle('Aanmelding basisschool de Werkplaats (' . date("d-m-Y H:i:s"). ')');
$pdf->SetSubject('Aanmelding');
// $pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 006', PDF_HEADER_STRING);

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
    require_once(dirname(__FILE__).'/lang/eng.php');
    $pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf->SetFont('dejavusans', '', 10);

// add a page
$pdf->AddPage();

// writeHTML($html, $ln=true, $fill=false, $reseth=false, $cell=false, $align='')
// writeHTMLCell($w, $h, $x, $y, $html='', $border=0, $ln=0, $fill=0, $reseth=true, $align='', $autopadding=true)

// create some HTML content
$html = $pdf_data;

// output the HTML content
$pdf->writeHTML($html, true, false, true, false, '');
$pdf->Output('Aanmelding_WP_' . date("Ymd_His") .'.pdf', 'I');

?>
