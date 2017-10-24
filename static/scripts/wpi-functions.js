function wpi_toggle_advanced_options(this_element){var advanced_option_class=!1,show_type=!1,show_type_element_attribute=!1,wrapper=jQuery(this_element).attr("wrapper")?jQuery(this_element).closest("."+jQuery(this_element).attr("wrapper")):jQuery(this_element).parents(".wpi_dynamic_table_row");if(void 0!==jQuery(this_element).attr("advanced_option_class"))var advanced_option_class="."+jQuery(this_element).attr("advanced_option_class");if(void 0!==jQuery(this_element).attr("show_type_element_attribute"))var show_type_element_attribute=jQuery(this_element).attr("show_type_element_attribute");if(advanced_option_class||(advanced_option_class=".wpi_advanced_option"),0==wrapper.length)var wrapper=jQuery(this_element).parents(".wpi_something_advanced_wrapper");if(show_type_source=jQuery(this_element).attr("show_type_source")){var source_element=jQuery("#"+show_type_source);source_element&&jQuery(source_element).is("select")&&(show_type=jQuery("option:selected",source_element).val())}if(show_type||(element_path=jQuery(advanced_option_class,wrapper)),show_type&&(element_path=jQuery(advanced_option_class+"["+show_type_element_attribute+"='"+show_type+"']",wrapper)),jQuery(this_element).is("input[type=checkbox]")){var toggle_logic=jQuery(this_element).attr("toggle_logic");return void(jQuery(this_element).is(":checked")?"reverse"==toggle_logic?jQuery(element_path).hide():jQuery(element_path).show():"reverse"==toggle_logic?jQuery(element_path).show():jQuery(element_path).hide())}return jQuery(this_element).is("select")?(jQuery(advanced_option_class+"["+show_type_element_attribute+"]",wrapper).hide(),void(jQuery(this_element).val()==show_type?jQuery(element_path).show():jQuery(element_path).hide())):void jQuery(element_path).toggle()}function wpi_create_slug(slug){return slug=slug.replace(/[^a-zA-Z0-9_\s]/g,""),slug=slug.toLowerCase(),slug=slug.replace(/\s/g,"_")}function wpi_add_row(element){var auto_increment=!1,table=jQuery(element).parents(".ud_ui_dynamic_table");jQuery(table).attr("id");if("true"==jQuery(table).attr("auto_increment"))var auto_increment=!0;else if("true"==jQuery(table).attr("allow_random_slug"))var allow_random_slug=!0;var cloned=jQuery(".wpi_dynamic_table_row:last",table).clone();jQuery(cloned).appendTo(table);var added_row=jQuery(".wpi_dynamic_table_row:last",table);if(jQuery(added_row).show(),jQuery("textarea",added_row).val(""),jQuery("input[type=text]",added_row).val(""),jQuery("input[type=checkbox]",added_row).attr("checked",!1),jQuery("textarea:disabled,input[type=text]:disabled,input[type=checkbox]:disabled",added_row).removeAttr("disabled"),auto_increment)jQuery("input,select,textarea",added_row).each(function(element){var old_name=jQuery(this).attr("name"),matches=old_name.match(/\[(\d{1,2})\]/),old_count=!1,new_count=!1;matches&&(old_count=parseInt(matches[1]),new_count=old_count+1);var new_name=old_name.replace("["+old_count+"]","["+new_count+"]");jQuery(this).attr("name",new_name)});else if(allow_random_slug){var slug_setter=jQuery("input.slug_setter",added_row);slug_setter.length>0&&wpi_updateRowNames(slug_setter.get(0),!0)}return jQuery(added_row).attr("new_row","true"),jQuery("input.slug_setter",added_row).focus(),added_row}function wpi_show_error(message){jQuery("#wpi_single_error").remove(),jQuery("<div id='wpi_single_error' class='error fade below-h2'><p>"+message+"</p></div>").insertAfter(".wrap > h2")}function wpi_show_success(message){jQuery("#message").remove(),jQuery("<div id='message' class='updated below-h2'><p>"+message+"</p></div>").insertAfter(".wrap > h2")}function wpi_remove_errors(message){jQuery("#wpi_single_error").remove()}function wpi_validate_email(address){var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,100})$/;return 0==reg.test(address)?!1:!0}function wpi_disable_quote(){jQuery(".wpi_wpi_invoice_quote_").attr("checked",!1)}function wpi_enable_quote(){jQuery(".wpi_quote_option").show(),jQuery(".wpi_wpi_invoice_quote_").attr("checked",!0)}function wpi_toggle_wpi_event_type(){is_recurring?(jQuery("#wpi_event_type").val(2),jQuery("#wpi_event_type").attr("disabled","disabled")):jQuery("#wpi_event_type").removeAttr("disabled")}function wpi_enable_deposit(){wpi_disable_quote(),wpi_disable_recurring(),wpi_hide_recurring_option(),wpi_hide_quote_option(),jQuery(".wpi_deposit_settings").show()}function wpi_disable_deposit(){wpi_show_recurring_option(),wpi_show_quote_option(),jQuery(".wpi_deposit_settings").hide(),jQuery(".wpi_deposit_settings input").val("")}function wpi_hide_deposit_option(){jQuery(".wpi_hide_deposit_option").hide()}function wpi_show_deposit_option(){jQuery(".wpi_hide_deposit_option").show()}function wpi_hide_quote_option(){jQuery(".wpi_quote_option").hide()}function wpi_show_quote_option(){jQuery(".wpi_quote_option").show()}function wpi_enable_recurring(){wpi_disable_quote(),wpi_disable_deposit(),wpi_hide_deposit_option(),wpi_hide_quote_option(),jQuery(".wpi_recurring_options").show(),jQuery(".wpi_turn_off_recurring").show(),jQuery(".wpi_recurring_bill_settings").show(),jQuery(".wpi_not_for_recurring").hide(),jQuery(document).trigger("wpi_enable_recurring"),is_recurring=!0,wpi_toggle_wpi_event_type(),wpi_recalc_totals()}function wpi_enable_recurring_start_date(type){jQuery("#wpi_wpi_invoice_recurring_send_invoice_automatically_"+type).removeAttr("checked"),jQuery(".wpi_recurring_start_date."+type).show()}function wpi_disable_recurring_start_date(type){jQuery("#wpi_wpi_invoice_recurring_send_invoice_automatically_"+type).attr("checked","checked"),jQuery(".wpi_recurring_start_date."+type).hide()}function wpi_hide_recurring_option(){jQuery(".wpi_turn_off_recurring").hide()}function wpi_show_recurring_option(){jQuery(".wpi_turn_off_recurring").show()}function wpi_disable_recurring(){jQuery(".wpi_invoice_adjustment_event_type_row").hide(),jQuery(".wpi_recurring_options").hide(),jQuery(".wpi_wpi_invoice_meta_recurring_active_").attr("checked",!1),jQuery(".wpi_turn_off_recurring input").attr("checked",!1),jQuery(".wpi_recurring_bill_settings").val(""),jQuery(".wpi_recurring_bill_settings input").attr("checked",!1),jQuery(".wpi_recurring_bill_settings").hide(),jQuery(".wpi_not_for_recurring").show(),jQuery(document).trigger("wpi_disable_recurring"),is_recurring=!1,wpi_recalc_totals(),wpi_toggle_wpi_event_type()}function wpi_show_paycharge_box(){jQuery("#postbox_status_and_history").show(),jQuery("#wpi_enter_payments").toggle(),jQuery("#wpi_enter_payments .input_field").val(""),jQuery("#wpi_enter_payments").is(":visible")?jQuery("#wpi_enter_payments").parent().css("max-height","286px"):jQuery("#wpi_enter_payments").parent().css("max-height","150px")}function wpi_process_manual_event(){jQuery("#wpi_process_manual_event").attr("disabled","disabled");var event_data;event_data={action:"wpi_process_manual_event",nonce:jQuery("#wpi_process_manual_event_nonce").val(),invoice_id:jQuery("#wpi_invoice_id").val(),event_type:jQuery("#wpi_event_type").val(),event_amount:jQuery("#wpi_event_amount").val(),event_tax:jQuery("#wpi_event_tax").val(),event_note:jQuery("#wpi_event_note").val(),event_date:jQuery(".wpi_event_date").val(),event_time:jQuery(".wpi_event_time").val()},jQuery.ajax({dataType:"json",data:event_data,beforeSend:function(){},type:"POST",url:ajaxurl,success:function(data){jQuery("#wpi_process_manual_event").removeAttr("disabled"),"true"==data.success?(jQuery("#wpi_event_amount").val(""),jQuery("#wpi_event_note").val(""),jQuery("#wpi_event_tax").val(""),jQuery("#wpi_event_type").val("add_payment"),jQuery("#event_tax_holder").hide(),jQuery("#ajax-response").show(),jQuery("#ajax-response p").html(data.message),wpi_update_status_box(),wpi_update_charges_list(),"add_payment"==event_data.event_type&&(window.adjustments-=event_data.event_amount),"do_adjustment"==event_data.event_type&&(window.adjustments-=event_data.event_amount),wpi_recalc_totals()):(jQuery(".wpi_ajax_response").addClass("wpi_error"),jQuery(".wpi_ajax_response").html(data.message))}})}function wpi_show_notification_box(){jQuery("#send_notification_box").toggle(),jQuery("#send_notification_box").is(":visible")}function wpi_insert_predefined_service(){add_itemized_list_row("invoice_list");var option_value=jQuery("#wpi_predefined_services option:selected").val();option_value=option_value.split("|");var name=option_value[0],description=option_value[1],quantity=option_value[2],price=option_value[3],tax=option_value[4],global_tax=jQuery("#wp_invoice_tax").val();global_tax>0&&tax!=global_tax&&jQuery("#wp_invoice_tax").val(""),jQuery("#invoice_list li.wp_invoice_itemized_list_row:last input.item_name").val(name),jQuery("#invoice_list li.wp_invoice_itemized_list_row:last input.item_quantity").val(quantity),jQuery("#invoice_list li.wp_invoice_itemized_list_row:last input.item_price").val(price),jQuery("#invoice_list li.wp_invoice_itemized_list_row:last input.line_tax_item").val(tax),""!=description&&(jQuery("#invoice_list li.wp_invoice_itemized_list_row:last .item_description").show(),jQuery("#invoice_list li.wp_invoice_itemized_list_row:last .item_description").val(description)),jQuery("#wpi_predefined_services").val(1),wpi_recalc_totals()}function wpi_load_email_notification(){var invoice_id,selected=jQuery("#wpi_change_notification option:selected").val(),invoice_id=jQuery("#wpi_invoice_id").val();empty(invoice_id)&&(invoice_id=jQuery("#new_invoice_id").text()),selected&&(jQuery("#wpi_template_loading").show(),template_id_val=selected,jQuery.getJSON(ajaxurl,{action:"wpi_get_notification_email",template_id:template_id_val,wpi_invoiceid:invoice_id},function(response){jQuery("#wpi_notification_message").val(response.wpi_content),jQuery("#wpi_notification_subject").val(response.wpi_subject),jQuery("#wpi_template_loading").hide()}))}function wpi_send_notification(){jQuery("#wpi_template_loading").show(),jQuery.ajax({data:{action:"wpi_send_notification",subject:jQuery("#wpi_notification_subject").val(),invoice_id:jQuery("#wpi_invoice_id").val(),template:jQuery("#wpi_change_notification option:selected").text(),to:jQuery("#wpi_notification_send_to").val(),body:jQuery("#wpi_notification_message").val()},type:"POST",url:ajaxurl,success:function(data){200==data.status?wpi_show_success(data.msg):wpi_show_error(data.msg),jQuery("#send_notification_box").hide(),jQuery("#wpi_template_loading").hide(),wpi_update_status_box(),jQuery("html, body").animate({scrollTop:0},"slow")},dataType:"json"})}function checkdate(input){var validformat=/^\d{2}\/\d{2}\/\d{4}$/;if(validformat.test(input)){var monthfield=input.split("/")[0],dayfield=input.split("/")[1],yearfield=input.split("/")[2],dayobj=new Date(yearfield,monthfield-1,dayfield);return dayobj.getMonth()+1!=monthfield||dayobj.getDate()!=dayfield||dayobj.getFullYear()!=yearfield?!1:!0}return!1}function wpi_validate_invoice(){var validated=!0;return""==jQuery('[name^="wpi_invoice[subject]"]').val()?(jQuery('[name^="wpi_invoice[subject]"]').addClass("wpi_error"),validated=!1):jQuery('[name^="wpi_invoice[subject]"]').removeClass("wpi_error"),jQuery("input.item_name:visible","#charges_list").each(function(k,v){jQuery(v).removeClass("wpi_error"),empty(jQuery(v).val())&&(jQuery(v).addClass("wpi_error"),validated=!1)}),jQuery("input.item_amount:visible","#charges_list").each(function(k,v){jQuery(v).removeClass("wpi_error"),empty(jQuery(v).val())&&(jQuery(v).addClass("wpi_error"),validated=!1)}),jQuery("input.item_charge_tax:visible","#charges_list").each(function(k,v){jQuery(v).removeClass("wpi_error"),(isNaN(jQuery(v).val())||jQuery(v).val()<0)&&(jQuery(v).addClass("wpi_error"),validated=!1)}),validated}function wpi_save_invoice(){var invoice_data,radios={};return invoice_data={action:"wpi_save_invoice",nonce:jQuery("#wpi-update-invoice").val()},jQuery('[name^="wpi_invoice"]').each(function(){invoice_data[this.name]=this.value,jQuery(this).is(":checkbox")&&(jQuery(this).is(":checked")?invoice_data[this.name]="on":invoice_data[this.name]="off"),jQuery(this).is(":radio")&&(radios[this.value]=jQuery(this))}),jQuery.each(radios,function(k,radio){radio.is(":checked")&&(invoice_data[radio.attr("name")]=k)}),invoice_data["wpi_invoice[description]"]=jQuery('textarea[name="content"]').val(),jQuery.ajax({data:invoice_data,beforeSend:function(){},type:"POST",url:ajaxurl,success:function(data){jQuery("#ajax-response").show(),jQuery("#ajax-response p").html(data),jQuery("#send_notification_box").show(),jQuery("#postbox_status_and_history").show(),jQuery(".wpi_hide_until_saved").show();var dom="<div>"+data+"</div>",a=jQuery("a",dom);if(a.length>0){var permalink=a.attr("href");jQuery("#sample-permalink").length>0&&jQuery("#sample-permalink").html(permalink)}jQuery("a.wpi_update_with_invoice_url").each(function(){var url_annex;url_annex=jQuery(this).attr("url_annex")?jQuery(this).attr("url_annex"):"",jQuery(this).attr("href",permalink+url_annex)}),wpi_update_status_box()}}),jQuery("#wpi_wpi_invoice_quote_").is(":checked")?jQuery("#postbox_payment_methods").hide():jQuery("#postbox_payment_methods").show(),empty(jQuery("#wpi_notification_send_to").val())&&jQuery("#wpi_notification_send_to").val(jQuery("#wpi_user_email").text()),empty(jQuery("#wpi_notification_subject").val())&&jQuery("#wpi_notification_subject").val(jQuery("#title").val()),!1}function wpi_update_status_box(){jQuery.post(ajaxurl,{action:"wpi_get_status",invoice_id:jQuery("#wpi_invoice_id").val()},function(data){jQuery("#wpi_invoice_status_table").html(data),is_recurring&&jQuery(".wpi_not_for_recurring").hide()})}function wpi_update_charges_list(){jQuery.post(ajaxurl,{action:"wpi_get_charges",invoice_id:jQuery("#wpi_invoice_id").val()},function(data){jQuery("#charges_list .wp_invoice_itemized_charge_row").remove(),jQuery("#charges_list").append(data).show(),wpi_recalc_totals()})}function wp_invoice_add_time(target,add_days){if("clear"==add_days)jQuery("#wpi_invoice_form #"+target+"_mm").val(""),jQuery("#wpi_invoice_form #"+target+"_jj").val(""),jQuery("#wpi_invoice_form #"+target+"_aa").val("");else{var myDate=new Date,week_from_now=new Date(myDate.getTime()+24*add_days*60*60*1e3),month=week_from_now.getMonth()+1;month=(10>month?"0":"")+month;var day=(week_from_now.getDate()<10?"0":"")+week_from_now.getDate();jQuery("#wpi_invoice_form #"+target+"_mm").val(month),jQuery("#wpi_invoice_form #"+target+"_jj").val(day),jQuery("#wpi_invoice_form #"+target+"_aa").val(week_from_now.getFullYear())}return!1}function wp_invoice_calculate_owed(){alert("running wp_invoice_calculate_owed, obsolete?"),jQuery("#wp_invoice_total_owed").html(jQuery("#invoice_sorter_table tr:visible .row_money").sum()),jQuery("#wp_invoice_total_owed").formatCurrency({useHtml:!0})}function wp_invoice_cancel_recurring(){jQuery("#wp_invoice_subscription_name").val(""),jQuery("#wp_invoice_subscription_unit").val(""),jQuery("#wp_invoice_subscription_length").val(""),jQuery("#wp_invoice_subscription_start_month").val(""),jQuery("#wp_invoice_subscription_start_day").val(""),jQuery("#wp_invoice_subscription_start_year").val(""),jQuery("#wp_invoice_subscription_total_occurances").val(""),jQuery("#wp_invoice_enable_recurring_billing").toggle(),jQuery(".wp_invoice_enable_recurring_billing").toggle()}function wp_invoice_subscription_start_time(add_days){function formatNum(num){var mynum=1*num,retVal=10>mynum?"0":"";return retVal+mynum}if("clear"==add_days)jQuery("#wp_invoice_subscription_start_month").val(""),jQuery("#wp_invoice_subscription_start_day").val(""),jQuery("#wp_invoice_subscription_start_year").val("");else{myDate=new Date;var week_from_now=new Date(myDate.getTime()+24*add_days*60*60*1e3);month=week_from_now.getMonth()+1,jQuery("#wp_invoice_subscription_start_month").val(formatNum(month)),jQuery("#wp_invoice_subscription_start_day").val(week_from_now.getDate()),jQuery("#wp_invoice_subscription_start_year").val(week_from_now.getFullYear())}return!1}function wpi_disable_all_payment_methods(){jQuery(".wpi_billing_section_show").attr("checked",!1),jQuery(".billing-default-option").val(""),jQuery(".wp_invoice_accordion .wp_invoice_accordion_section").hide(),jQuery(".wpi_notice").hide()}function wpi_init_payment_method(){jQuery(".wpi_billing_section_show").each(function(){wpi_select_payment_method(jQuery(this).attr("id"),!1,!0)}),wpi_can_client_change_payment_method()}function wpi_can_client_change_payment_method(){jQuery(".wpi_client_change_payment_method").is(":not(:checked)")?(jQuery(".wpi-payment-setting").hide(),wpi_disable_all_payment_methods(),wpi_select_payment_method(jQuery("#wp_invoice_payment_method option:selected").val(),!0,!0)):jQuery(".wpi-payment-setting").show()}function wpi_select_payment_method(method,force,init){var method_checked;force&&jQuery("#"+method+".wpi_billing_section_show").attr("checked",!0),method_checked=jQuery("#"+method+".wpi_billing_section_show").is(":checked")?!0:!1,method_checked?(jQuery(".billing-default-option").val(""),jQuery(".billing-"+method+"-default-option").val("true"),jQuery("div."+method+"-setup-section").show(),init||jQuery(".wp_invoice_accordion").accordion("option","active","#"+method+"-setup-section-header"),jQuery("#"+method+".wpi_billing_section_show").parent().parent().find(".wpi_notice").show(),jQuery("#"+method+".wpi_billing_section_show").parent().parent().find(".wpi_notice").animate({backgroundColor:"lightyellow"},1e3)):(jQuery(".billing-"+method+"-default-option").val(""),jQuery("div."+method+"-setup-section").hide(),init||jQuery(".wp_invoice_accordion").accordion("option","active","#"+jQuery("#wp_invoice_payment_method option:selected").val()+"-setup-section-header"),jQuery("#"+method+".wpi_billing_section_show").parent().parent().find(".wpi_notice").hide())}function wpi_focus_payment_method(method){jQuery(".ui-accordion").accordion("option","active","#"+method+"-setup-section-header")}function add_itemized_list_row(where){var lastRow=jQuery("#"+where+" .wp_invoice_itemized_list_row:last").clone(),id=parseInt(jQuery(".id",lastRow).html())+1;return jQuery(".id",lastRow).html(id),lastRow.attr("slug",id),"invoice_list"==where&&(jQuery(".item_name",lastRow).attr("name","wpi_invoice[itemized_list]["+id+"][name]"),jQuery(".item_description",lastRow).attr("name","wpi_invoice[itemized_list]["+id+"][description]"),jQuery(".row_quantity input",lastRow).attr("name","wpi_invoice[itemized_list]["+id+"][quantity]"),jQuery(".row_price input",lastRow).attr("name","wpi_invoice[itemized_list]["+id+"][price]"),jQuery(".row_tax input",lastRow).attr("name","wpi_invoice[itemized_list]["+id+"][tax]"),jQuery(".row_total",lastRow).attr("id","total_item_"+id)),"wpi_predefined_services_div"==where&&(jQuery(".item_name",lastRow).attr("name","wpi_settings[predefined_services]["+id+"][name]"),jQuery(".item_description",lastRow).attr("name","wpi_settings[predefined_services]["+id+"][description]"),jQuery(".row_quantity input",lastRow).attr("name","wpi_settings[predefined_services]["+id+"][quantity]"),jQuery(".row_price input",lastRow).attr("name","wpi_settings[predefined_services]["+id+"][price]"),jQuery(".row_tax input",lastRow).attr("name","wpi_settings[predefined_services]["+id+"][tax]"),jQuery(".row_total",lastRow).attr("id","total_item_"+id)),jQuery("input, textarea",lastRow).val(""),jQuery(".row_total",lastRow).text("0"),""!=jQuery("#wp_invoice_tax").val()&&(global_tax=jQuery("#wp_invoice_tax").val(),jQuery(".row_tax input",lastRow).val(global_tax)),jQuery("#"+where+" li.wp_invoice_itemized_list_row:last").after(lastRow),!1}function add_itemized_list_row_discount(){if(discount_count=jQuery(".wp_invoice_discount_row").size(),discounts_hidden=jQuery(".wp_invoice_discount_row:last").is(":visible")?!1:!0,discounts_hidden)jQuery(".wp_invoice_discount_row:last").show();else{var lastRow=jQuery("#invoice_list .wp_invoice_discount_row:last").clone(),id=parseInt(jQuery(".id",lastRow).html())+1;jQuery(".id",lastRow).html(id),jQuery(".item_name",lastRow).attr("name","wpi_invoice[meta][discount]["+id+"][name]"),jQuery(".item_amount",lastRow).attr("name","wpi_invoice[meta][discount]["+id+"][amount]"),jQuery(".item_type",lastRow).attr("name","wpi_invoice[meta][discount]["+id+"][type]"),jQuery("input",lastRow).val(""),jQuery("#invoice_list li.wpi_invoice_totals").before(lastRow)}return!1}function wpi_recalc_totals(){var taxable_subtotal=0,non_taxable_subtotal=0,tax_percents=[],total=0,subtotal=0,total_tax=0,total_discount=0;jQuery(".wp_invoice_itemized_list_row").each(function(i){var row_price=parseFloat(jQuery(".row_price input",this).val());row_price=0>row_price||isNaN(row_price)?"":row_price;var row_quantity=parseFloat(jQuery(".row_quantity input",this).val());row_quantity=0>row_quantity||isNaN(row_quantity)?"":row_quantity;var row_tax=parseFloat(jQuery(".row_tax input",this).val());if(row_tax=0>row_tax||isNaN(row_tax)?"":row_tax,isNaN(row_price)||jQuery(".row_price input",this).val(row_price),isNaN(row_quantity)||jQuery(".row_quantity input",this).val(row_quantity),isNaN(row_tax)||jQuery(".row_tax input",this).val(row_tax),row_price=isNaN(row_price)?0:row_price,row_quantity=isNaN(row_quantity)?0:row_quantity,row_tax=isNaN(row_tax)?0:row_tax,row_tax>0&&row_price>0&&row_quantity>0){taxable_subtotal+=row_price*row_quantity,tax_percents.push({tax:row_tax,qty:row_quantity,prc:row_price});var row_total=row_price*row_quantity+row_price*row_quantity*row_tax/100}else{non_taxable_subtotal+=row_price*row_quantity;var row_total=row_price*row_quantity}row_total||(row_total=0),jQuery(".row_total",this).html(row_total),jQuery(".row_total",this).formatCurrency({roundToDecimalPlace:2,useHtml:!0})}),jQuery(".wp_invoice_itemized_charge_row").each(function(i){var row_amount=parseFloat(jQuery(".row_amount input",this).val()),row_charge_tax=parseFloat(jQuery(".row_charge_tax input",this).val());if(row_amount=isNaN(row_amount)?0:row_amount,row_charge_tax=isNaN(row_charge_tax)?0:row_charge_tax,row_charge_tax>0){taxable_subtotal+=row_amount,tax_percents.push({tax:row_charge_tax,qty:1,prc:row_amount});var row_total=row_amount+row_amount*row_charge_tax/100}else{non_taxable_subtotal+=row_amount;var row_total=row_amount}row_total||(row_total=0),jQuery(".row_total",this).html(row_total),jQuery(".row_total",this).formatCurrency({roundToDecimalPlace:2,useHtml:!0})});for(var avg_tax=0,i=0;i<tax_percents.length;i++)avg_tax+=tax_percents[i].tax;avg_tax>0&&(avg_tax/=tax_percents.length),subtotal=taxable_subtotal+non_taxable_subtotal,jQuery(".wp_invoice_discount_row:visible").each(function(i){var name=jQuery(".item_name",this),type=jQuery(".item_type select",this),value=jQuery(".item_price input",this),discount_row_type=type.val(),discount_row_value=value.val();empty(discount_row_value)?name.css({"border-color":""}):(discount_row_value=parseFloat(discount_row_value),discount_row_value=0>discount_row_value||isNaN(discount_row_value)?"":discount_row_value,isNaN(discount_row_value)||value.val(discount_row_value),empty(value.val())||name.val().length?empty(value.val())&&name.val().length?value.css({"border-color":"red"}):(name.css({"border-color":""}),value.css({"border-color":""})):name.css({"border-color":"red"}),"percent"==discount_row_type?total_discount=subtotal*(discount_row_value/100):total_discount+=discount_row_value)});var tax_method=jQuery("#wpi_tax_method").val();switch(tax_method){case"before_discount":jQuery.each(tax_percents,function(k,v){total_tax+=v.prc/100*v.tax*v.qty});break;case"after_discount":var subtotal_with_discount=subtotal-total_discount,taxable_amount=taxable_subtotal/subtotal*subtotal_with_discount;total_tax=taxable_amount*avg_tax/100;break;default:jQuery.each(tax_percents,function(k,v){total_tax+=v.prc/100*v.tax*v.qty})}if(total=subtotal-total_discount+total_tax,total_discount>subtotal+total_tax&&total_discount>0)return jQuery(".wp_invoice_discount_row:visible").each(function(i){jQuery(".item_price input",this).val("")}),void wpi_recalc_totals();"undefined"==typeof is_recurring&&(is_recurring=!1),empty(window.adjustments)||0==window.adjustments?(jQuery(".column-invoice-details-adjustments").hide(),"0"==window.adjustments?adjustments="0":(adjustments=jQuery(".calculate_invoice_adjustments").val(),empty(adjustments)||(adjustments=parseFloat(adjustments.replace("$",""))))):(jQuery(".column-invoice-details-adjustments").show(),jQuery(".column-invoice-details-subtotal").show(),adjustments=parseFloat(adjustments),total+=adjustments);var total_due=total;empty(total_tax)?jQuery(".column-invoice-details-tax").hide():(jQuery(".column-invoice-details-tax").show(),jQuery(".column-invoice-details-subtotal").show()),empty(total_discount)?jQuery(".column-invoice-details-discounts").hide():jQuery(".column-invoice-details-discounts").show(),is_recurring?jQuery(".column-invoice-details-adjustments").hide():empty(adjustments)||jQuery(".column-invoice-details-adjustments").show(),jQuery(".calculate_invoice_adjustments").val(adjustments).formatCurrency({roundToDecimalPlace:2}),jQuery(".calculate_invoice_subtotal").val(subtotal).formatCurrency({roundToDecimalPlace:2}),jQuery(".calculate_discount_total").val(total_discount).formatCurrency({roundToDecimalPlace:2}),jQuery(".calculate_invoice_tax").val(total_tax).formatCurrency({roundToDecimalPlace:2}),jQuery(".calculate_invoice_total").val(total_due).formatCurrency({roundToDecimalPlace:2})}function empty(mixed_var){var key;if(""===mixed_var||0===mixed_var||"0"===mixed_var||null===mixed_var||mixed_var===!1||void 0===mixed_var)return!0;if("object"==typeof mixed_var){for(key in mixed_var)return!1;return!0}return!1}var wpi_updateRowNames=function(instance,allowRandomSlug){if("undefined"==typeof instance)return!1;if("undefined"==typeof allowRandomSlug)var allowRandomSlug=!1;var this_row=jQuery(instance).parents("tr.wpi_dynamic_table_row"),old_slug=jQuery(this_row).attr("slug"),new_slug=jQuery(instance).val(),new_slug=wpi_create_slug(new_slug);if(""==new_slug){if(!allowRandomSlug)return;new_slug="random_"+Math.floor(1e3*Math.random())}jQuery(".slug",this_row).val(new_slug),jQuery(this_row).attr("slug",new_slug),jQuery("input,select,textarea",this_row).each(function(element){var old_name=jQuery(this).attr("name"),new_name=old_name.replace(old_slug,new_slug),old_id=jQuery(this).attr("id"),new_id=old_id.replace(old_slug,new_slug);jQuery(this).attr("name",new_name),jQuery(this).attr("id",new_id)}),jQuery("label",this_row).each(function(element){var old_for=jQuery(this).attr("for"),new_for=old_for.replace(old_slug,new_slug);jQuery(this).attr("for",new_for)})};jQuery.delegate=function(rules){return function(e){var target=jQuery(e.target);for(var selector in rules)if(target.is(selector))return rules[selector].apply(this,jQuery.makeArray(arguments))}},this.tooltip=function(){xOffset=10,yOffset=20,jQuery(".wp_invoice_tooltip").hover(function(e){this.t=this.title,this.title="",jQuery("body").append("<p id='wp_invoice_tooltip'>"+this.t+"</p>"),jQuery("#wp_invoice_tooltip").css("top",e.pageY-xOffset+"px").css("left",e.pageX+yOffset+"px").fadeIn("fast")},function(){this.title=this.t,jQuery("#wp_invoice_tooltip").remove()}),jQuery("a.wp_invoice_tooltip").mousemove(function(e){jQuery("#tooltip").css("top",e.pageY-xOffset+"px").css("left",e.pageX+yOffset+"px")})},jQuery.fn.attrList=function(strAttribute,strDelimiter){var arrValues=new Array;return strDelimiter=strDelimiter?strDelimiter:",",this.each(function(intI){var jNode=jQuery(this);arrValues[arrValues.length]=jNode.attr(strAttribute)}),arrValues.join(strDelimiter)};