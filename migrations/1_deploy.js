const HRMContract=artifacts.require('EmailStorage')
module.exports=function(deployer)
{
    deployer.deploy(HRMContract);
}