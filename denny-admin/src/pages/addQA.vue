<template>
    <div class="robotQA">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path:'/' }">管理中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'robotManage'}">机器人管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'salesFunnel'}">{{operate}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <div class="match">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane name="first"><span slot="label"> 智能匹配<i class="el-icon-question" title="根据机器人算法识别客户的问题,识别为一致时,将给出相应的答案"></i></span>
                        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                            <el-form-item
                                label="问题"
                                prop="question"
                                :rules="{
                                required: true, message: '问题不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input type="textarea" v-model="dynamicValidateForm.question"></el-input>
                                <div style="width: 71px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                            <el-form-item
                                v-for="(domain, index) in dynamicValidateForm.domains"
                                :label="'相似问题' + index"
                                :key="domain.key"
                                :prop="'domains.' + index + '.value'"
                                :rules="{
                                required: true, message: '相似问题不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input type="textarea" v-model="domain.value" ></el-input><el-button @click.prevent="addDomain" v-if="index==0">新增</el-button><el-button @click.prevent="removeDomain(domain)" v-else>删除</el-button>
                            </el-form-item>
                            <el-form-item
                                prop="answer"
                                label="答案"
                                :rules="{
                                required: true, message: '答案不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input type="textarea" v-model="dynamicValidateForm.answer"></el-input>
                                <div style="width: 71px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                            <el-form-item
                                prop="delivery"
                                label="是否展示界面"
                                width='300'
                            >
                                <el-switch v-model="dynamicValidateForm.delivery"></el-switch>
                                <div style="width: 343px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                            <el-form-item>
                                <p style=" text-align:left;color:red;font-size:12px"> 注：机器人前端页面最多可展示12个</p>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('dynamicValidateForm')" style="margin-left:-28px;">新增关联问题</el-button><i class="el-icon-question" style="cursor: pointer;margin-left:6px" title="当客户识别到该Q&A对时，给出答案后，将继续提供关联问题给客户选择"></i>
                                <el-button @click="resetForm('dynamicValidateForm')" style="margin-left:28px;">发布并保存</el-button>
                            </el-form-item>

                        </el-form>
                    
                    </el-tab-pane>
                    <el-tab-pane  name="second"><span slot="label"> 包含匹配<i class="el-icon-question" title="当客户的问题里面包含本问题时,将会发送本问题答案"></i></span>
                         <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                            <el-form-item
                                prop="question"
                                label="问题"
                                :rules="{
                                required: true, message: '问题不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input type="textarea" v-model="dynamicValidateForm.question"></el-input>
                                <div style="width: 71px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                            <el-form-item
                                v-for="(domain, index) in dynamicValidateForm.domains"
                                :label="'相似问题' + index"
                                :key="domain.key"
                                :prop="'domains.' + index + '.value'"
                                :rules="{
                                required: true, message: '相似问题不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input type="textarea" v-model="domain.value" ></el-input><el-button @click.prevent="addDomain" v-if="index==0">新增</el-button><el-button @click.prevent="removeDomain(domain)" v-else>删除</el-button>
                            </el-form-item>
                            <el-form-item
                                prop="answer"
                                label="答案"
                                :rules="{
                                required: true, message: '答案不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input type="textarea" v-model="dynamicValidateForm.answer"></el-input>
                                <div style="width: 71px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                            <el-form-item
                                prop="delivery"
                                label="是否展示界面"
                                width='300'
                            >
                                <el-switch v-model="dynamicValidateForm.delivery"></el-switch>
                                <div style="width: 343px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                            
                            <el-form-item>
                                <p style=" text-align:left;color:red;font-size:12px"> 注：机器人前端页面最多可展示12个</p>
                            </el-form-item>
                             <el-form-item>
                                <el-button type="primary" @click="submitForm('dynamicValidateForm')" style="margin-left:-28px;">新增关联问题</el-button><i class="el-icon-question" style="cursor: pointer;margin-left:6px" title="当客户识别到该Q&A对时，给出答案后，将继续提供关联问题给客户选择"></i>
                                <el-button @click="resetForm('dynamicValidateForm')" style="margin-left:28px;">发布并保存</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane  name="third"><span slot="label"> 精准匹配<i class="el-icon-question" title="当客户的问题完全跟本问题一致时 ,才会发送本问题的答案"></i></span>
                        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                            <el-form-item
                                label="问题"
                                :rules="{
                                     required: true, message: '问题不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input type="textarea" v-model="dynamicValidateForm.question"></el-input>

                                <div style="width: 71px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                            <el-form-item
                                v-for="(domain, index) in dynamicValidateForm.domains"
                                :label="'相似问题' + index"

                                :key="domain.key"
                                :prop="'domains.' + index + '.value'"
                                :rules="{
                                required: true, message: '相似问题不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input type="textarea" v-model="domain.value" ></el-input><el-button @click.prevent="addDomain" v-if="index==0">新增</el-button><el-button @click.prevent="removeDomain(domain)" v-else>删除</el-button>
                            </el-form-item>
                            <el-form-item
                                label="答案"
                                :rules="{
                                required: true, message: '答案不能为空', trigger: 'blur'
                                }"
                            >

                                <el-input type="textarea" v-model="dynamicValidateForm.answer"></el-input>
                                <div style="width: 71px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                           
                            <el-form-item
                                prop="delivery"
                                label="是否展示界面"
                                width='300'
                            >
                                <el-switch v-model="dynamicValidateForm.delivery"></el-switch>
                                <div style="width: 343px;height: 10px;display: inline-flex;"></div>
                            </el-form-item>
                            <el-form-item>
                                <p style=" text-align:left;color:red;font-size:12px"> 注：机器人前端页面最多可展示12个</p>
                            </el-form-item>
                             <el-form-item>
                                <el-button type="primary" @click="submitForm('dynamicValidateForm')" style="margin-left:-28px;">新增关联问题</el-button><i class="el-icon-question" style="cursor: pointer;margin-left:6px" title="当客户识别到该Q&A对时，给出答案后，将继续提供关联问题给客户选择"></i>
                                <el-button @click="resetForm('dynamicValidateForm')" style="margin-left:28px;">发布并保存</el-button>
                            </el-form-item>
                        </el-form>
                    
                    </el-tab-pane>
                </el-tabs>
            </div> 
            <div class="relate">
                <p>现有关联问题：</p>
                <ul>
                    <li v-for="(item,index) in all_related_question" :key='index'>
                        <label >{{index+1}} : {{item.question}}</label> 
                        <el-button @click='edit(item,index)'>编辑</el-button>
                        <el-button @click='delect(index)'>删除</el-button>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="关联问题名称:" :label-width="formLabelWidth">
                    <el-input v-model="form.question" autocomplete="off" placeholder="请输入问题"></el-input>
                </el-form-item>
                <el-form-item label="关联问题答案:" :label-width="formLabelWidth">
                    <el-input v-model="form.answer" autocomplete="off" placeholder="请输入答案"></el-input>
                    <li></li>
                </ul>
            </div>
        </div> -->
        <el-dialog title="新增关联问题" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="问题:" :label-width="formLabelWidth" prop="question">
                    <el-input v-model="form.question" autocomplete="off" placeholder="请输入问题"></el-input>
                </el-form-item>
                <el-form-item label="答案:" :label-width="formLabelWidth" prop="answer">
                    <el-input v-model="form.answer" autocomplete="off" placeholder="请输入答案"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>

                <el-button type="primary"  @click='newAddRelate()'>确 定</el-button>

            </div>
        </el-dialog>
    </div>
    
</template>
        
   
    
<script>
import { queSetting ,repQA,repSetting} from 'service/service'
export default{
    data() {
        return {
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    answer:'',
                    question: '',
                    sort:'',
                    delivery:false
                },
                title:'请输入关联问题',
                operate:'新增QA',
                all_related_question:[],
                similar_question:[],
                activeName: 'first',
                dialogFormVisible: false,
                form: {
                    question: '',
                    answer:'',
                    index:'',
                    // email: '',
                    delivery:''
                },
                rule:{
                    question: [
                        { required: true, message: '请输入功能名称', trigger: 'blur' },
                        { max:200,message: '长度不超过200', trigger: 'blur' },
                        // { validator:checkUsername, trigger: 'blur' },
                    ],
                    answer: [
                        { required: true, message: '请输入超链接', trigger: 'blur' },
                        { max:200,message: '超链接不合法', trigger: 'blur' },
                        // { validator:checkUsername, trigger: 'blur' },
                    ],
                },
                formLabelWidth: '120px'
        };
    },
    mounted(){
        if(this.$route.query.qa_id){
            this.operate = '修改QA'
            this.getQADate()
        }
    },
    methods: {
        submitForm() {
            this.dialogFormVisible = true
            this.title = '请输入关联问题'
            this.form.question=''
            this.form.answer = ''
            // console.log(this.dynamicValidateForm)
        },
        resetForm() {
            if(this.dynamicValidateForm.question && this.dynamicValidateForm.answer){
                this.submit()
            }else{
                this.$message({
                    type: 'error',
                    message: '问题和答案不能为空'
                })
            }

            // this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item)
            if (index !== -1) {
            this.dynamicValidateForm.domains.splice(index, 1)
            }
        },
        handleClick(tab, event){
           console.log(tab, event)
        },
        async getQADate(){
            try {
                let result = await repQA({
                    qa_id: this.$route.query.qa_id,
                    product_id: this.$route.query.product_id
                })
                if(result.errcode == 200){
                    let dominsList = []
                    if(result && result.data && result.data.qas_similar_list &&result.data.qas_similar_list.length>0){
                        result.data.qas_similar_list.forEach(item=>{
                            dominsList.push({
                                value:item.question
                            })
                        })
                    }else{
                        dominsList = [{
                            value: ''
                        }]
                    }
                    if(result && result.data && result.data.related_question_list&&result.data.related_question_list.length>0){
                        this.all_related_question = result.data.related_question_list
                    }
                    this.dynamicValidateForm = {
                        domains: dominsList,
                        answer:result.data.qa_dict.answer,
                        question:result.data.qa_dict.question,
                        sort:result.data.qa_dict.weight,
                        delivery:result.data.qa_dict.is_show == 1 ? true:false
                    }
                }
            } catch (err) {
                this.$message({
                    type: 'error',
                    message: err.msg
                })
            }
            
        },
        edit(item,index){
            this.dialogFormVisible = true
            this.title = '请编辑关联问题'
            this.form.question = item.question
            this.form.answer =item.answer
            this.form.index = index
        },
        delect(index){
            this.all_related_question.splice(index,1)
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                value: '',
                key: Date.now()
            });
        },
        newAddRelate(){
            const obj = {}
            obj.question = this.form.question
            obj.answer =this.form.answer
            if(this.title == '请编辑关联问题'){
                this.all_related_question[this.form.index].question = this.form.question
                this.all_related_question[this.form.index].answer = this.form.answer
            }else{
                this.all_related_question.push(obj)
            }
            this.dialogFormVisible = false
            this.form.question=''
            this.form.answer =''
        },
        async submit(){
            this.$refs['dynamicValidateForm'].validate((valid) => {
                if (valid) {
                    console.log(valid)
                } else {
                    console.log(valid)
                    this.$message({
                        message: '请检查表单是否填写完成',
                        type: 'error'
                    });
                    return
                }
            });
            this.similar_question = []
            this.dynamicValidateForm.domains.forEach(item=>{
                this.similar_question.push(item.value)
            })
            let result
            if(this.$route.query.qa_id){
                result = await repSetting({
                    all_related_question: JSON.stringify(this.all_related_question),
                    answer: this.dynamicValidateForm.answer,
                    match_type: "1",
                    product_id: this.$route.query.product_id,
                    qa_id:this.$route.query.qa_id,
                    question: this.dynamicValidateForm.question,
                    robot_code: this.$route.query.robot_code,
                    similar_question: JSON.stringify(this.similar_question),
                    // weight: this.dynamicValidateForm.sort,
                    is_show:this.dynamicValidateForm.delivery == true ? 1: 0
                })
            }else{
                result = await queSetting({
                    all_related_question: JSON.stringify(this.all_related_question),
                    answer: this.dynamicValidateForm.answer,
                    match_type: "1",
                    product_id: this.$route.query.product_id,
                    question: this.dynamicValidateForm.question,
                    robot_code: this.$route.query.robot_code,
                    similar_question: JSON.stringify(this.similar_question),
                    // weight: this.dynamicValidateForm.sort,
                    is_show:this.dynamicValidateForm.delivery == true ? 1: 0
                })
            }
            
            if(result.errcode == 200){
               this.$message({
                    message: result.errmsg,
                    type: 'success'
                });
                let params = {
                    robot_code:this.$route.query.robot_code,
                    product_id :this.$route.query.product_id
                }
                this.$router.push({ path: '/manage/QA' ,query: params})
            }else{
                // this.$message({
                //     message: result.data,
                //     type: 'error'
                // });
            }
        }

    }
}

</script>

<style lang="scss" scope>

.robotQA{
    position: absolute;
    padding: 8px;
    left: 0;
    width:100%;
    .content{
        display: flex;
        .match{
            margin-top: 40px; 
            width: 500px;
            .el-tabs__nav{
                width: 500px;
            }
            .el-tabs__item{
                padding: 0px 46px !important;
                font-size: 15px;
                color:#656565;
                font-weight: 400;
            }
            .el-tabs__item.is-active {
                color: #2E008B;
            }
        }
        .relate{

            flex: 1;
            margin-top:50px;
            ul{
                padding: 10px;
                li{
                    margin: 15px 20px;
                    display: flex;
                    label{
                        font-size:16px;
                        width: 300px;
                        font-family:PingFang-SC-Medium;
                        font-weight:400;
                        color:rgba(143,143,143,1);
                        line-height: 40px;
                        text-indent: 50px;
                        text-align: left;
                        letter-spacing: 0.3px;
                         overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap
                    }
                }
            }
            p{
                font-size:16px;
                text-indent: 75px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(73,73,73,1);
                text-align: left;
            }

            flex: 1

        }
    }
    .el-form{
        margin-top:20px; 
    }
    .el-form-item{
        width: 100%;

    }
    .el-form-item__label{
        text-align: left;
        font-weight: 500;
    }
    .el-input,.el-textarea {
        width: 60%;
        margin: 0 20px 0 -40px;
    }
    .el-form-item__content{
        margin: 0 !important;
    }
    .el-dialog{
        width: 400px;
    }
    .el-dialog_header{
       background:rgba(255,255,255,1)
    }
    .el-dialog__title{
        color: #2E008B;
        font-size: 16px;
    }
    
}

</style>
