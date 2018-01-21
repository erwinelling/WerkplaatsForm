<?php
// phpinfo();
// echo "JSON options<br><br>";
$string = file_get_contents("/Users/erwinelling/Sites/Werkplaats/WerkplaatsForm/werkplaats/data/werkplaats-options.json");
$json_a = json_decode($string, true);


$input = $json_a['fields'];
$html = "";
foreach($input as $key=>$value){
  // echo $key;
  // echo $value;
  if (array_key_exists('label', $input[$key])) {
    $html .= "<b>";
    $html .= $input[$key]['label'];
    $html .= "</b></br>";
  }
  if (array_key_exists('fields', $input[$key])) {
    // geneste arrays checken
    $html .= "HIER ZITTEN NOG GENESTE VELDEN";
  }
  elseif (array_key_exists($key, $_POST)) {
    // check ENUM labels
    if ($_POST[$key] == ""){
      $html .= "-";
    } else {
      $html .= $_POST[$key];
    };
  }
  $html .= "</br>";
};
echo $html;
// print_r($json_a);


echo "<br><br>POST values</br></br>";
foreach($_POST as $key=>$value){
  echo $key;
  echo $value;
}



// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;
//
// require('./fpdf/mc_table.php');
// require './PHPMailer/src/Exception.php';
// require './PHPMailer/src/PHPMailer.php';
// require './PHPMailer/src/SMTP.php';
//
// $pdf=new PDF_MC_Table();
// $pdf->AddPage();
// $pdf->SetFont('Arial','',12);
// //Table with 20 rows and 4 columns
// $pdf->SetWidths(array(180));
//
// foreach($_POST as $key=>$value){
//       $pdf->SetFont('Arial','B',12);
//       $pdf->Row(array($key));
//       $pdf->SetFont('');
//       $pdf->Row(array($value));
// }
// $depdf = $pdf->Output();
//
// $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
// try {
//     //Server settings
//     $mail->SMTPDebug = 2;                                 // Enable verbose debug output
//     $mail->isSMTP();                                      // Set mailer to use SMTP
//     $mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
//     $mail->SMTPAuth = true;                               // Enable SMTP authentication
//     $mail->Username = 'user@example.com';                 // SMTP username
//     $mail->Password = 'secret';                           // SMTP password
//     $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
//     $mail->Port = 587;                                    // TCP port to connect to
//
//     //Recipients
//     $mail->setFrom('from@example.com', 'Mailer');
//     $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
//     $mail->addAddress('ellen@example.com');               // Name is optional
//     $mail->addReplyTo('info@example.com', 'Information');
//     $mail->addCC('cc@example.com');
//     $mail->addBCC('bcc@example.com');
//
//     //Attachments
//     $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//     $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
//
//     //Content
//     $mail->isHTML(true);                                  // Set email format to HTML
//     $mail->Subject = 'Here is the subject';
//     $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
//     $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
//
//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
// }
//============================================================+
// File name   : example_011.php
// Begin       : 2008-03-04
// Last Update : 2013-05-14
//
// Description : Example 011 for TCPDF class
//               Colored Table (very simple table)
//
// Author: Nicola Asuni
//
// (c) Copyright:
//               Nicola Asuni
//               Tecnick.com LTD
//               www.tecnick.com
//               info@tecnick.com
//============================================================+

/**
 * Creates an example PDF TEST document using TCPDF
 * @package com.tecnick.tcpdf
 * @abstract TCPDF - Example: Colored Table
 * @author Nicola Asuni
 * @since 2008-03-04
 */
//
// // Include the main TCPDF library (search for installation path).
// require_once('./TCPDF/tcpdf.php');
//
// // extend TCPF with custom functions
// class MYPDF extends TCPDF {
//
//     // // Load table data from file
//     public function LoadData($file) {
//         // Read file lines
//         $lines = file($file);
//         $data = array();
//         foreach($lines as $line) {
//             $data[] = explode(';', chop($line));
//         }
//         return $data;
//     }
//
//     // Colored table
//     public function ColoredTable($header,$data) {
//         // Colors, line width and bold font
//         $this->SetFillColor(255, 0, 0);
//         $this->SetTextColor(255);
//         $this->SetDrawColor(128, 0, 0);
//         $this->SetLineWidth(0.3);
//         $this->SetFont('', 'B');
//         // Header
//         $w = array(40, 35, 40, 45);
//         $num_headers = count($header);
//         for($i = 0; $i < $num_headers; ++$i) {
//             $this->Cell($w[$i], 7, $header[$i], 1, 0, 'C', 1);
//         }
//         $this->Ln();
//         // Color and font restoration
//         $this->SetFillColor(224, 235, 255);
//         $this->SetTextColor(0);
//         $this->SetFont('');
//         // Data
//         $fill = 0;
//         foreach($data as $row) {
//             $this->Cell($w[0], 6, $row[0], 'LR', 0, 'L', $fill);
//             $this->Cell($w[1], 6, $row[1], 'LR', 0, 'L', $fill);
//             $this->Cell($w[2], 6, number_format($row[2]), 'LR', 0, 'R', $fill);
//             $this->Cell($w[3], 6, number_format($row[3]), 'LR', 0, 'R', $fill);
//             $this->Ln();
//             $fill=!$fill;
//         }
//         $this->Cell(array_sum($w), 0, '', 'T');
//     }
// }
//
// // create new PDF document
// $pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
//
// // set document information
// // $pdf->SetCreator(PDF_CREATOR);
// $pdf->SetAuthor('Werkplaats');
// $pdf->SetTitle('Werkplaats');
// $pdf->SetSubject('Aanmelding');
// // $pdf->SetKeywords('TCPDF, PDF, example, test, guide');
//
// // set default header data
// $pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 011', PDF_HEADER_STRING);
//
// // set header and footer fonts
// $pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
// $pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
//
// // set default monospaced font
// $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
//
// // set margins
// $pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
// $pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
// $pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
//
// // set auto page breaks
// $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
//
// // set image scale factor
// $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
//
// // set some language-dependent strings (optional)
// if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
//     require_once(dirname(__FILE__).'/lang/eng.php');
//     $pdf->setLanguageArray($l);
// }
//
// // ---------------------------------------------------------
//
// // set font
// $pdf->SetFont('helvetica', '', 12);
//
// // add a page
// $pdf->AddPage();
//
// // column titles
// // $header = array('Country', 'Capital', 'Area (sq km)', 'Pop. (thousands)');
//
// // data loading
// $data = $pdf->LoadData('table_data_demo.txt');
//
// // print colored table
// $pdf->ColoredTable($header, $data);
//
// // ---------------------------------------------------------
//
// // close and output PDF document
// $pdf->Output('example_011.pdf', 'I');
//
// //============================================================+
// // END OF FILE
// //============================================================+


?>
