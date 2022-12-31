<template>
  <div class=" pb-0 ">
    <div class="row">
      <div class="col-md-1 col-sm-1  h-25	col-lg-1	col-xl-1">
        <router-link :to="url">

          <!--   <i class="fa fa-angle-left"></i> -->

          <img height="30" width="30" class="h-25"
            src="data:image/png;base64,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" />
        </router-link>
      </div>
      <div class=" col-md-8 col-sm-8  h-25	col-lg-8	col-xl-8 border  rounded-pill ml-0 mb-2 p-0">

        <div class="col-1 h-100  border bg-primary    "
          style="width:10% ; border-radius:30px 0 0 30px; margin-left:0px">
          .
        </div>

      </div>
      <div class="row  col-md-3 col-sm-3  h-25	col-lg-3	col-xl-3 mb-2 ml-0 pl-0 mr-0 pr-0 rounded-pill">
        <div class="input-group">
          <div class="  form-outline col-10  mr-0 pr-0">
            <input type="search" id="form1" placeholder="Que recherchez vous ?"
              class="form-control  form-control form-control-sm" style="  border-radius:30px 0 0 30px; " />
          </div>
          <div class="col-2  ml-0 pl-0 mr-0 pr-0 " style="  border-radius:0 30px 30px 0; "> <button type="button"
              class="btn btn-primary " style=" height:60%; border-radius:0 30px 30px 0; ">
              <i class="fa fa-search"></i>
            </button></div>
        </div>
      </div>


      <!--end of col-->

      <!--end of col-->

    </div>

  </div>
</template>
<style scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control[type=file] {
  overflow: hidden;
}

.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-control::-webkit-date-and-time-value {
  height: 1.1em;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}


@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }

  .form-control::file-selector-button {
    transition: none;
  }
}

.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}

.form-control-sm {
  min-height: calc(1.5em + 0.5rem + 2px);
  padding: 0.1rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
}
</style>
<script>
export default {
  name: "CardHeaderRoute", props: {
    url: {
      type: String,
      required: true
    },

  }
};
</script>
