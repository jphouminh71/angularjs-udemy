using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using System.Text.Json.Serialization;

namespace angularjs.tester.api.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class DemoController : ControllerBase
    {
        private readonly ILogger<DemoController> _logger;

        public DemoController(ILogger<DemoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult getRules()
        {
            List<CharacterRule> allRules = new List<CharacterRule>();

            // construct all the rules
            CharacterRule firstRule = new CharacterRule() { rulename = "Must be 5 Characters." };
            CharacterRule secondRule = new CharacterRule() { rulename = "Must not be used anywhere else." };
            CharacterRule thirdRule = new CharacterRule() { rulename = "Must be cool." };

            allRules.Add(firstRule);
            allRules.Add(secondRule);
            allRules.Add(thirdRule);

            // return them back as JSON
            return Ok(new AllRules() { rules = allRules });
        }
    }
}